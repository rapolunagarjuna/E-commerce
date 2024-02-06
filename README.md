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

Setup .env file: 
 
    DATABASE_URL=
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=
    GITHUB_ID=
    GITHUB_SECRET=
    NEXTAUTH_SECRET=

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
