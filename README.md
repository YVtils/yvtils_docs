# YVtils Documentation

The official documentation website for YVtils - a comprehensive resource for users and developers working with YVtils plugins and modules.

## 🚀 Features

- **Multi-language Support** - Documentation available in multiple languages (English, German) via i18next
- **Interactive Code Examples** - Syntax-highlighted code snippets with multi-language support using Prism.js
- **User Documentation** - Guides for installing and using YVtils modules
- **Developer Documentation** - Setup guides and build instructions for contributors
- **YVtils Design System** - Consistent UI components matching the YVtils ecosystem
- **React 19** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server
- **Docker** - Containerized deployment
- **GitHub Actions** - Automated CI/CD pipeline

## 📋 Prerequisites

- Node.js 18 or higher
- npm or yarn
- Docker (for deployment)

## 🛠️ Local Development

### Installation

```bash
# Clone the repository
git clone https://github.com/YVtils/yvtils_docs.git
cd yvtils_docs

# Install dependencies
npm install
```

### Development Scripts

```bash
# Start development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🏗️ Project Structure

```text
yvtils_docs/
├── public/              # Static assets
│   └── robots.txt
├── src/                 # Source code
│   ├── components/      # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── CodeWindow.tsx   # Syntax-highlighted code snippets
│   ├── pages/          # Page components
│   │   ├── dev/        # Developer documentation pages
│   │   │   ├── setup.tsx
│   │   │   ├── build.tsx
│   │   │   └── fusion/
│   │   ├── user/       # User documentation pages
│   │   │   └── modules/    # Module-specific docs
│   │   ├── 404.tsx
│   │   ├── Placeholder.tsx
│   │   └── Redirect.tsx
│   ├── i18n/           # Internationalization configuration
│   │   └── config.ts
│   ├── locales/        # Translation files
│   │   ├── en/         # English translations
│   │   └── de/         # German translations
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── .github/
│   └── workflows/      # GitHub Actions workflows
│       └── deploy.yml
├── docker-compose.yml  # Docker Compose configuration
├── Dockerfile         # Docker build configuration
├── package.json       # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
├── vite.config.ts     # Vite configuration
└── README.md          # This file
```

## 🐳 Docker Deployment

### Building the Docker Image

The documentation site uses a multi-stage Docker build:

1. **Build Stage**: Uses Node.js 18 Alpine to build the documentation website
2. **Production Stage**: Uses Nginx Alpine to serve the static documentation files

```bash
# Build the Docker image
docker build -t yvtils-docs:latest .

# Run the container locally
docker run -p 8080:80 yvtils-docs:latest
```

### Docker Compose

For production deployment using Docker Compose:

```bash
# Start the application
docker compose up -d

# View logs
docker compose logs -f

# Stop the application
docker compose down
```

The application will be available at `http://localhost:1026`.

## 🚀 CI/CD Pipeline

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that:

1. **Build**:

   - Sets up Node.js 18
   - Installs dependencies with `npm ci`
   - Builds the documentation with `npm run build`

2. **Docker**:

   - Builds a Docker image
   - Pushes to the container registry

3. **Deploy**:
   - Connects to the production server via SSH
   - Pulls the latest image
   - Restarts the application using Docker Compose

### Required Secrets

Configure the following secrets in your GitHub repository:

- `REGISTRY_URL` - Container registry URL
- `REGISTRY_USERNAME` - Registry username
- `REGISTRY_PASSWORD` - Registry password
- `REGISTRY_IMAGE_NAME` - Full image name (e.g., `registry.yvtils.net/yvtils-web`)
- `SSH_HOST` - Production server hostname/IP
- `SSH_USER` - SSH username
- `SSH_PRIVATE_KEY` - SSH private key for server access
- `DEPLOY_DIR` - Directory path on server where docker-compose.yml is located

## 🔧 Configuration

### Vite Configuration

The `vite.config.ts` file contains:

- React plugin setup
- Development server configuration (port 3000)
- Auto-open browser in development

### TypeScript Configuration

- `tsconfig.json` - Main TypeScript configuration
- `tsconfig.node.json` - Node.js specific configuration for build tools

## 📝 Available Scripts

| Command              | Description                  |
| -------------------- | ---------------------------- |
| `npm run dev`        | Start development server     |
| `npm run build`      | Build for production         |
| `npm run preview`    | Preview production build     |
| `npm run lint`       | Run ESLint                   |
| `npm run type-check` | Run TypeScript type checking |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run linting and type checking (`npm run lint && npm run type-check`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contributing Documentation

When adding or updating documentation:

- Add new pages in the appropriate `src/pages/dev/` or `src/pages/user/` directory
- Update translations in `src/locales/en/` and `src/locales/de/`
- Use the `CodeWindow` component for code snippets with syntax highlighting
- Test that all language switches work correctly
- Ensure navigation links are updated in the appropriate locale files

## 📄 License

This project is part of the YVtils ecosystem. Please refer to the main project license.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the existing issues in the repository
2. Create a new issue with detailed information about the problem
3. Include steps to reproduce, expected behavior, and actual behavior

---

Built with ❤️ using React, TypeScript, and Vite.
