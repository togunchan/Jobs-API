# Jobs API

This is a backend API for managing job listings, built with Node.js.

## Features

- Create, read, update, and delete job listings
- User authentication and authorization
- Pagination and filtering of job listings
- Error handling and validation

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcrypt for password hashing

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/togunchan/Jobs-API.git
   ```
2. Navigate to the project directory:
   ```bash
   cd jobs-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. The API will be available at `http://localhost:5000`.

## API Endpoints

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login a user
- `GET /api/v1/jobs` - Get all job listings
- `POST /api/v1/jobs` - Create a new job listing
- `GET /api/v1/jobs/:id` - Get a single job listing
- `PATCH /api/v1/jobs/:id` - Update a job listing
- `DELETE /api/v1/jobs/:id` - Delete a job listing

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
