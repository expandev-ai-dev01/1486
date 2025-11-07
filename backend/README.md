# Catálogo de Bolos - Backend API

Backend API for the cake catalog application. This is a Node.js/Express/TypeScript REST API designed to support a frontend cake catalog with product listings, filters, details, reviews, and shopping cart functionality.

## Project Overview

**Project Name:** Catálogo de bolos

**Description:** Backend API for a bakery product catalog featuring cake listings, filters, product details (photos, descriptions, prices, reviews), and shopping cart functionality.

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Architecture:** REST API
- **Data Storage:** In-memory (arrays/objects)

## Features

This backend supports the following features:

1. **Cake Listings** - API endpoints for retrieving all available cakes
2. **Product Filters** - Filtering by categories, flavors, price, ratings
3. **Product Details** - Complete product information including photos and reviews
4. **Review System** - Customer reviews and ratings for products
5. **Shopping Cart** - Cart management (add, update, remove items)
6. **Photo Viewing** - Support for product image retrieval
7. **Mock Data** - In-memory data storage for development

## Project Structure

```
src/
├── api/                    # API controllers
│   └── v1/                 # API Version 1
│       ├── external/       # Public endpoints
│       └── internal/       # Authenticated endpoints
├── routes/                 # Route definitions
│   └── v1/                 # Version 1 routes
├── middleware/             # Express middleware
├── services/               # Business logic
├── utils/                  # Utility functions
├── constants/              # Application constants
├── instances/              # Service instances
├── config/                 # Configuration
├── tests/                  # Global test utilities
└── server.ts               # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create `.env` file from `.env.example`:

```bash
cp .env.example .env
```

4. Configure environment variables in `.env`

### Development

Run the development server:

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

### Building for Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Testing

Run tests:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

### Linting

Run ESLint:

```bash
npm run lint
```

Fix linting issues:

```bash
npm run lint:fix
```

## API Documentation

### Base URL

- Development: `http://localhost:3000/api/v1`
- Production: `https://api.yourdomain.com/api/v1`

### Health Check

```
GET /health
```

Returns API health status.

### API Endpoints

API endpoints will be documented here as features are implemented.

## Environment Variables

| Variable | Description | Default |
|----------|-------------|----------|
| NODE_ENV | Environment mode | development |
| PORT | Server port | 3000 |
| API_VERSION | API version | v1 |
| CORS_ORIGINS | Allowed CORS origins | localhost:3000,localhost:3001,localhost:5173 |

## Development Guidelines

- Follow TypeScript strict mode
- Use ESLint for code quality
- Write tests for all business logic
- Follow REST API best practices
- Use semantic commit messages
- Document all API endpoints

## Code Standards

- **Indentation:** 2 spaces
- **Quotes:** Single quotes
- **Semicolons:** Always
- **Line Length:** Max 120 characters
- **Naming:** camelCase for variables/functions, PascalCase for types/interfaces

## Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Run linting and tests
5. Submit a pull request

## License

ISC