# Mobi_Comm_MPA

Mobi-Comm is a telecom service provider focused on delivering seamless connectivity and innovative features. It offers high-speed internet, easy SIM activation, number portability, data redemption, and lost device tracking, ensuring a smooth and reliable user experience.

## Project Structure

- **MobiComm_MPA_Backend**: Spring Boot backend application
- **MobiComm_MPA_Frontend**: Frontend application with Admin and Customer user interfaces

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd MobiComm_MPA_Backend
   ```

2. Create a `.env` file in the backend directory with the following variables:
   ```
   # Twilio Configuration
   TWILIO_ACCOUNT_SID=your_account_sid_here
   TWILIO_AUTH_TOKEN=your_auth_token_here
   TWILIO_PHONE_NUMBER=your_phone_number_here

   # Database Configuration
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   ```

3. Copy the `application.properties.sample` file to create your own `application.properties`:
   ```
   cp src/main/resources/application.properties.sample src/main/resources/application.properties
   ```

4. Build and run the application:
   ```
   ./mvnw spring-boot:run
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd MobiComm_MPA_Frontend
   ```

2. Open the HTML files in your browser or set up a local server to serve the files.

## Environment Variables

This project uses environment variables to manage sensitive information. Make sure to set up the following variables:

- `TWILIO_ACCOUNT_SID`: Your Twilio account SID
- `TWILIO_AUTH_TOKEN`: Your Twilio authentication token
- `TWILIO_PHONE_NUMBER`: Your Twilio phone number
- `DB_USERNAME`: Your database username
- `DB_PASSWORD`: Your database password

## Security Note

Never commit sensitive information like API keys, passwords, or tokens to the repository. Always use environment variables or a secure configuration management system.
