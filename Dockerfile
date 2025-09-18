# Build Stage
FROM node:22-alpine AS build

WORKDIR /app

# Accept token via --build-arg
ARG GITHUB_TOKEN

# Add .npmrc for GitHub registry access
RUN echo "@yvtils:registry=https://npm.pkg.github.com/" > .npmrc && \
    echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> .npmrc

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

# Final Stage - No secrets included
FROM httpd:alpine

# Copy built app to Apache document root
COPY --from=build /app/dist /usr/local/apache2/htdocs/

# Create a custom Apache configuration for React Router
RUN echo '<Directory "/usr/local/apache2/htdocs">' > /usr/local/apache2/conf/react-router.conf && \
    echo '    Options -Indexes' >> /usr/local/apache2/conf/react-router.conf && \
    echo '    AllowOverride All' >> /usr/local/apache2/conf/react-router.conf && \
    echo '    RewriteEngine On' >> /usr/local/apache2/conf/react-router.conf && \
    echo '    RewriteCond %{REQUEST_FILENAME} !-f' >> /usr/local/apache2/conf/react-router.conf && \
    echo '    RewriteCond %{REQUEST_FILENAME} !-d' >> /usr/local/apache2/conf/react-router.conf && \
    echo '    RewriteRule ^(.*)$ index.html [QSA,L]' >> /usr/local/apache2/conf/react-router.conf && \
    echo '</Directory>' >> /usr/local/apache2/conf/react-router.conf

# Enable mod_rewrite and include our custom config
RUN sed -i \
    -e '/LoadModule rewrite_module/s/^#//g' \
    -e 's/#AllowOverride [Nn]one/AllowOverride All/' \
    -e 's/AllowOverride [Nn]one/AllowOverride All/' \
    /usr/local/apache2/conf/httpd.conf && \
    echo 'Include conf/react-router.conf' >> /usr/local/apache2/conf/httpd.conf && \
    echo 'AllowEncodedSlashes NoDecode' >> /usr/local/apache2/conf/httpd.conf

# Ensure DirectoryIndex is properly set
RUN echo "DirectoryIndex index.html" >> /usr/local/apache2/conf/httpd.conf

EXPOSE 80
CMD ["httpd-foreground"]
