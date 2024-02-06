# E-commerce website
An E-commerce website to sell various products ranging from Geosynthetics, Industrial Textiles, Agricultural Textiles etc.

Features:
 - Tailwind design
 - Tailwind animations and effects
 - Full responsiveness
 - Secured User Authentication.
 - Reusable Responsive Components in React.
 - Image upload using Cloudinary CDN
 - Client form validation and handling using react-hook-form
 - Server error handling using react-toast
 - RESTful principles. 
 - OCR Integration to automate scanned PO's insertion into database.
 - Scalable Architecture for DB Design.
 - Containerized the application in docker.

Cloning the repository:

    git clone 

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
