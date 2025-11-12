# YVtils Web App

A modern React web application built with Vite and TypeScript, part of the YVtils ecosystem.

## 🚀 Features

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **YVtils Design System** - Consistent UI components
- **ESLint** - Code linting for consistent code quality
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
git clone <repository-url>
cd yvtils_web

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
yvtils_web/
├── public/              # Static assets
│   └── icon.svg
├── src/                 # Source code
│   ├── components/      # Reusable React components
│   │   └── Header.tsx
│   ├── pages/          # Page components
│   │   ├── 404.tsx
│   │   └── Redirect.tsx
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

The project uses a multi-stage Docker build:

1. **Build Stage**: Uses Node.js 18 Alpine to build the React application
2. **Production Stage**: Uses Nginx Alpine to serve the built static files

```bash
# Build the Docker image
docker build -t yvtils-web:latest .

# Run the container locally
docker run -p 8080:80 yvtils-web:latest
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
   - Builds the React application with `npm run build`

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

## 📄 License

This project is part of the YVtils ecosystem. Please refer to the main project license.

## 🆘 Support

If you encounter any issues or have questions, please:

1. Check the existing issues in the repository
2. Create a new issue with detailed information about the problem
3. Include steps to reproduce, expected behavior, and actual behavior

---

Built with ❤️ using React, TypeScript, and Vite.
