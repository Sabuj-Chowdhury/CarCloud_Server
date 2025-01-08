# CarCloud Server

This repository contains the backend server for the **CarCloud** project, built with **Node.js**, **Express**, and **MongoDB**. It provides a robust API for managing cars and bookings, utilizing JWT-based authentication and middleware for secure access.

---

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [API Endpoints](#api-endpoints)
6. [Middleware](#middleware)
7. [License](#license)

---

## Features

- **JWT Authentication:**
  - Secure token generation, validation, and cookie management.
- **Car Management:**
  - Add, update, delete, and retrieve car data.
- **Booking Management:**
  - Manage bookings with status updates and duration handling.
- **Search and Sort:**
  - Search cars by brand, model, and location, with sorting by price.
- **Pagination Support:**
  - Fetch cars with limits and sorting options.
- **Middleware:**
  - Authorization for protected routes.

---

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT (JSON Web Tokens)**
- **Cors**
- **Cookie-Parser**
- **dotenv**

---

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v16+ recommended)
- MongoDB (local or cloud database)
- Git

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd carcloud-server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   - Refer to the [Environment Variables](#environment-variables) section.

4. Start the server:

   ```bash
   npm start
   ```

   The server will run at `http://localhost:5000`.

---

## Environment Variables

Create a `.env` file in the root directory with the following keys:

```env
PORT=5000
DB_USER=<your-mongodb-username>
DB_PASS=<your-mongodb-password>
ACCESS_TOKEN=<your-jwt-secret>

```

---

## API Endpoints

### Authentication

- **POST /jwt**
  - Generate JWT and set token as an HTTP-only cookie.
- **POST /logout**
  - Clear the JWT token from cookies.

### Cars

- **POST /add-car**
  - Add a new car to the database.
- **GET /latest-cars**
  - Fetch the latest 6 cars.
- **GET /my-cars/:email** _(Protected)_
  - Retrieve cars posted by a specific user.
- **GET /all-cars**
  - Fetch all cars with optional sorting and search.
- **GET /car/:id**
  - Retrieve a single car by ID.
- **PUT /update/:id**
  - Update car details by ID.
- **DELETE /car/:id**
  - Delete a car by ID.

### Bookings

- **POST /add-booking**
  - Add a new booking and update the car's booking count.
- **GET /bookings/:email** _(Protected)_
  - Retrieve bookings made by a specific user.
- **PATCH /booking-status/:id**
  - Update the booking status.
- **PATCH /booking-dates/:id**
  - Update the start and end dates of a booking.

---

## Middleware

### `verifyToken`

A custom middleware to validate JWT tokens for protected routes. It checks:

- The presence of a token in cookies.
- Decoding the token using the JWT secret.
- Matching the logged-in user's email with the request parameter.

---

For any issues or feature requests, please create an [issue](repository-issues-url) in this repository.
