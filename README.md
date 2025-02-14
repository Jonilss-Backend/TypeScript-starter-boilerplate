# TypeScript Starter Modern Boilerplate

A modern and flexible TypeScript boilerplate designed to get you started quickly with a clean and scalable architecture. This project is fully integrated with MongoDB, Jest for testing, and various middlewares to enhance functionality. It's suitable for building RESTful APIs and microservices with a solid foundation.

---

## Features

- **TypeScript**: Full TypeScript support with configuration for easy setup and scalability.
- **MongoDB Integration**: MongoDB as a database, utilizing Mongoose for data modeling.
- **Jest Testing**: Integrated Jest for unit testing with TypeScript support.
- **Winston Logging**: Integrated Winston for structured and configurable logging.
- **Express.js**: Web framework for building RESTful APIs.
- **Middlewares**: Pre-configured common middlewares including logging, error handling, etc.
- **Mongo Memory Server (for testing)**: For running MongoDB in-memory during tests without the need for a local MongoDB instance.

---

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (for local development) or use a cloud solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) or [npm](https://www.npmjs.com/get-npm)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Jonilss-Backend/TypeScript-starter-boilerplate.git
cd TypeScript-starter-boilerplate
```

Install dependencies:

```bash
npm install
# or
yarn install
```

---

## Running the Application

To run the development server:

```bash
npm run dev
# or
yarn dev
```

This will start the server on `http://localhost:3000`.

---

## Running Tests

To run tests with Jest:

```bash
npm run test
# or
yarn test
```

For running tests in watch mode:

```bash
npm run test:watch
# or
yarn test:watch
```

---

## Environment Variables

Create a `.env` file at the root of the project and define the necessary environment variables:

```bash
# MongoDB URI
MONGODB_URI=mongodb://localhost:27017/mydatabase

# JWT Secret (for token authentication)
JWT_SECRET=mySecretKey

# Node environment
NODE_ENV=development

# Server port
PORT=3000
```

You can also configure different `.env` files for different environments (e.g., `.env.production`, `.env.test`).

---

## Project Structure

The project follows a modular structure:

```bash
src/
├── controllers/            # API route handlers
├── middlewares/            # Express middlewares
├── models/                 # Mongoose models
├── routes/                 # API route definitions
├── services/               # Business logic layer
├── utils/                  # Utility functions and helpers
├── app.ts                  # Express app setup
├── server.ts               # Entry point to start the server
└── config.ts               # Configuration settings
```

---

### Controllers

Controllers contain the logic for handling HTTP requests. They should call service methods to perform business logic.

---

### Middlewares

Middlewares are used for additional processing of requests and responses. Common examples are logging, error handling, and request validation.

---

### Services

Services contain the business logic and interact with the database through models.

---

### Models

Models define the data structure and schema for the database using Mongoose.

---

## Testing

This project uses [Jest](https://jestjs.io/) for testing and [mongodb-memory-server](https://github.com/nodkz/mongodb-memory-server) for in-memory MongoDB database during tests.

---

### Example Test

Tests are located in the `src/services/__tests__` directory. The tests are designed to ensure that the service methods work as expected. You can write tests for your controllers and services in this directory.

---

## Logging

The project uses [Winston](https://github.com/winstonjs/winston) for structured logging. Logs are printed in the console in development and saved to `logs/app.log` in production.

---

### Example of Logging Middleware

Logging middleware is configured to capture important information about incoming requests. It records the HTTP method, URL, and request body (if applicable).

---

## Contribution

We welcome contributions! If you'd like to improve this boilerplate or fix a bug, please feel free to open a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

For more details, check out the [GitHub Guide on Contributing](https://guides.github.com/activities/contributing-to-open-source/).

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. For more information about the MIT License, visit [choosealicense.com](https://choosealicense.com/licenses/mit/).

