# ZerodhaFullstack
This project is a full-stack clone of the Zerodha website and its sub-application Kite, which is built using React. The application simulates the core functionalities of a stock trading platform, including a dynamic user interface, real-time data handling using static coded data, and seamless component management.

# Overview

## Zerodha Website Clone

Landing Page: Fully responsive design with navigation and overview sections.
User Registration & Login: Secure authentication flow with validation.
Informational Pages: Detailed sections for pricing, account types, and FAQs.

Here are some images from the output to support the above,

Landing Page/Hero Section:
![Landing Page/ Hero Section](https://github.com/user-attachments/assets/d8b98ffe-32a5-469e-a0ff-bf1ce0cbc0a1)
About Section:
![About Section](https://github.com/user-attachments/assets/2454092e-d916-499c-898b-2ff6829a56eb)
Products Section:
![Products Section](https://github.com/user-attachments/assets/b40eae45-9cd3-4335-a6ad-4edf2ad03599)
Support Section:
![Support Section](https://github.com/user-attachments/assets/9dd5db67-ab4d-4be6-a5e5-e72d02e3f2d1)

## Kite Sub-Application Clone

Dashboard: Displays real-time static coded stock data. Provides an overview of user portfolios.
Search and Trade: Search for stocks and view their details. Simulate buy and sell transactions.
Order Book: Tracks user orders, including pending and completed trades.

Here are some images from the output to support the above,

Dashboard:
![Dashboard](https://github.com/user-attachments/assets/58132883-6cf4-4f19-9106-cea07dcb5069)
Funds Section:
![Funds](https://github.com/user-attachments/assets/02822c10-4c22-4bf9-b502-a3c7a8dd7324)

## Key Functionalities

### Webserver

1.⁠ ⁠Efficient API Management:
Handles CRUD operations for user and stock data.
Routes requests for both the Zerodha main site and Kite sub-application.

2.⁠ ⁠Real-time Updates:
Streams stock data updates to the front end using WebSockets.
Ensures low-latency updates to the order book and portfolio.

### Component Management

1.⁠ ⁠Reusable Components:
Built modular components like buttons, modals, and charts for consistent UI/UX.
Enhanced maintainability and scalability.

2.⁠ ⁠State Management:
Centralized handling of user sessions, orders, and portfolio data using Redux.
Ensures predictable and efficient state changes.

3.⁠ ⁠Dynamic Routing:
Enables deep linking to specific stocks, orders, or portfolio details.

## Setup Instructions

### Clone the Repository:

git clone ZerodhaFullstack


### Install Dependencies:

Frontend:

cd frontend
npm install


Backend:

cd backend
npm install

Dashboard:

cd dashboard
npm install


### Start the Application:

Start the backend server:

cd backend
npm start


Start the frontend:

cd frontend
npm start


### Access the Application:

Open your browser and navigate to:
http://localhost:3000
