# Stage 1: Build the application
FROM node:14 AS build-stage

WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image.
COPY . ./

# Build the application
RUN npm run build

# copy nginx configuration file
COPY nginx.conf /usr/src/app/nginx.conf

# Stage 2: Serve the application from Nginx
FROM nginx:1.17.1-alpine AS production-stage

COPY --from=build-stage /usr/src/app/dist/ /usr/share/nginx/html
COPY --from=build-stage /usr/src/app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
