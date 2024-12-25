# CarCloud Backend

This is the backend service for the **CarCloud** application, which is built with **Node.js** and **Express.js** and uses **MongoDB** for database management. The API handles routes for managing cars, bookings, and user-related data.

---

## Features

- Add and manage car listings.
- Book cars with real-time updates on bookings.
- Retrieve cars and booking data based on user and filter options.
- Update booking status and durations.
- Comprehensive query options including search, sort, and pagination.

---

## Setup

### Prerequisites

- Node.js installed
- MongoDB instance running
- Environment variables set up in `.env` file:
  ```env
  PORT=5000
  DB_USER=your_mongodb_user
  DB_PASS=your_mongodb_password
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/carcloud-backend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd carcloud-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The server will run on the specified port in `.env` or `5000` by default.

---

## API Documentation

### Base URL

```plaintext
http://localhost:5000
```

### Routes

#### **POST**

1. **Add a car**
   - **Endpoint:** `/add-car`
   - **Description:** Adds a car with user and car details.
   - **Body Example:**
     ```json
     {
       "brand": "Toyota",
       "model": "Corolla",
       "price": 100,
       "location": "New York",
       "owner": {
         "name": "John Doe",
         "email": "john@example.com"
       },
       "bookingCount": 0
     }
     ```
2. **Add a booking**
   - **Endpoint:** `/add-booking`
   - **Description:** Adds booking details and increments the car's booking count.
   - **Body Example:**
     ```json
     {
       "carID": "64f00fa19c4f33a8bc5e0000",
       "customer": {
         "name": "Jane Doe",
         "email": "jane@example.com"
       },
       "startDate": "2024-12-01",
       "endDate": "2024-12-10",
       "bookingStatus": "Pending"
     }
     ```

#### **GET**

1. **Get user's cars**
   - **Endpoint:** `/my-cars/:email`
   - **Description:** Retrieves all cars added by a specific user.
   - **Params:**
     - `:email` (string): User's email.
2. **Get user's bookings**
   - **Endpoint:** `/bookings/:email`
   - **Description:** Retrieves all bookings made by a specific user.
   - **Params:**
     - `:email` (string): User's email.
3. **Get car details**
   - **Endpoint:** `/car/:id`
   - **Description:** Fetches details of a car by its ID.
   - **Params:**
     - `:id` (string): Car ID.
4. **Get all cars**
   - **Endpoint:** `/all-cars`
   - **Description:** Fetches all cars with options for limit, sort, and search.
   - **Query Parameters:**
     - `limit` (number): Limit the number of cars returned.
     - `sort` (string): Sorting options (`asc` or `dsc` by price).
     - `search` (string): Search by brand, model, or location.

#### **PATCH**

1. **Update booking status**
   - **Endpoint:** `/booking-status/:id`
   - **Description:** Updates the booking status of a booking.
   - **Body Example:**
     ```json
     {
       "bookingStatus": "Confirmed"
     }
     ```
2. **Update booking dates**
   - **Endpoint:** `/booking-dates/:id`
   - **Description:** Updates the start and end dates of a booking.
   - **Body Example:**
     ```json
     {
       "startDate": "2024-12-05",
       "endDate": "2024-12-15"
     }
     ```

#### **PUT**

1. **Update car details**
   - **Endpoint:** `/update/:id`
   - **Description:** Updates car details in the database.
   - **Body Example:**
     ```json
     {
       "price": 120,
       "location": "San Francisco"
     }
     ```

#### **DELETE**

1. **Delete a car**
   - **Endpoint:** `/car/:id`
   - **Description:** Deletes a car by its ID.
   - **Params:**
     - `:id` (string): Car ID.

---

## Default Route

- **Endpoint:** `/`
- **Description:** Returns a simple message to verify the server is running.
- **Response Example:**
  ```json
  {
    "message": "Server running!!!!"
  }
  ```

---

## Author

**Sabuj Chowdhury**  
[GitHub](https://github.com/Sabuj-Chowdhury)
