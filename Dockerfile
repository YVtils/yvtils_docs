# syntax=docker/dockerfile:1
FROM node:26-alpine AS build
WORKDIR /app
RUN npm install --global pnpm@12.18.0
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml .npmrc ./
RUN --mount=type=secret,id=github_token,required=true \
    printf '//npm.pkg.github.com/:_authToken=%s\n' "$(cat /run/secrets/github_token)" > /tmp/npmrc \
    && NPM_CONFIG_USERCONFIG=/tmp/npmrc pnpm install --frozen-lockfile \
    && rm /tmp/npmrc
COPY . .
RUN pnpm build

FROM nginx:1.28-alpine
COPY deployment/nginx.conf /etc/nginx/conf.d/default.conf
COPY deployment/publish-docs.sh /usr/local/bin/publish-docs
COPY --from=build /app/dist /opt/docs
HEALTHCHECK --interval=10s --timeout=3s --start-period=10s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1/healthz || exit 1
