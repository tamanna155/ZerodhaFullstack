# ZerodhaFullstack
This project is a full-stack clone of the Zerodha website and its sub-application Kite, which is built using React. The application simulates the core functionalities of a stock trading platform, including a dynamic user interface, real-time data handling using static coded data, and seamless component management.

# Overview

## Zerodha Website Clone

Landing Page: Fully responsive design with navigation and overview sections.
User Registration & Login: Secure authentication flow with validation.
Informational Pages: Detailed sections for pricing, account types, and FAQs.

Here are some images from the output to support the above,

Landing Page/Hero Section:
![Landing Page/ Hero Section](https://github.com/user-attachments/assets/458d4f3b-e4c3-47e3-a3ec-04f1aaf29590)

About Section:
![About Section](https://github.com/user-attachments/assets/72bfd04b-af01-4ad8-84ec-94f192d8ba95)

Products Section:
![Products Section]![image](https://github.com/user-attachments/assets/89ea0145-a3dc-4266-ba40-6904b24ee267)

Support Section:
![Support Section](https://github.com/user-attachments/assets/caac6536-10f7-47e4-8217-43f00d0ebcf8)


## Kite Sub-Application Clone

Dashboard: Displays real-time static coded stock data. Provides an overview of user portfolios.
Search and Trade: Search for stocks and view their details. Simulate buy and sell transactions.
Order Book: Tracks user orders, including pending and completed trades.

Here are some images from the output to support the above,

Dashboard:
![Dashboard](https://github.com/user-attachments/assets/5dcde31b-3d6f-4a40-a0f4-47ceef8d09eb)

Funds Section:
![Funds](https://github.com/user-attachments/assets/6d52c11d-8a16-41ec-ae06-b764916a0321)

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
