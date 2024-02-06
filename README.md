# E-commerce website
An E-commerce website to sell various products ranging from Geosynthetics, Industrial Textiles, Agricultural Textiles, Soil Erosion etc.

Tech Stack:
Node Express React Mongodb Redux

![Screenshot 2024-02-06 at 6 18 40 PM](https://github.com/rapolunagarjuna/E-commerce/assets/112997527/6a9cd63c-cde1-4d4d-9329-2e075cf2f498)
![Screenshot 2024-02-06 at 6 19 00 PM](https://github.com/rapolunagarjuna/E-commerce/assets/112997527/dd35f8f1-57b0-4cde-acdb-7b6c11023b3a)
![Screenshot 2024-02-06 at 6 19 17 PM](https://github.com/rapolunagarjuna/E-commerce/assets/112997527/d098fddb-64c7-4649-a4f6-82b23053b636)

Features:
 - Tailwind design
 - Tailwind animations and effects
 - Full responsiveness
 - Secured User Authentication.
 - Reset Password using Email
 - Reusable Responsive Components in React.
 - Image upload using Cloudinary CDN
 - Client form validation and handling using react-hook-form
 - Server error handling using react-toast
 - RESTful principles. 
 - OCR Integration to automate scanned PO's insertion into database.
 - Scalable Architecture for DB Design.
 - Invoice Generation.
 - User Management.
 - Employee Management.
 - Products and Categories Management.
 - Admin Dashboard with various charts for business insights.
 - Email Notification for Invoice.
 - Containerized the application in docker.

Cloning the repository:

    git clone git@github.com:rapolunagarjuna/E-commerce.git

Setup .env file in backend folder: 

    DB_URI=
    JWT_SECRET=
    PORT=
    FRONTEND_URL="http://localhost:5173"
    ADMIN_MAIL_ID=
    CHATGPT_API_KEY=

Client development:

    cd client
    npm i
    npm run dev

Backend development:

    cd backend
    npm i
    node app.js

Docker:

    docker-compose up --build
    
Login credentials:

    email: admin@example.com
    password: admin
