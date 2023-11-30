
# Use the official nginx image as the base image
FROM nginx

# Install Node.js and npm
RUN apt-get update && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get install -y nodejs

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Copy the build files from the React app to the nginx default public directory
COPY build /usr/share/nginx/html/shop

# Expose port 80 to allow incoming traffic
EXPOSE 80

# Start nginx server when the container starts
CMD ["nginx", "-g", "daemon off;"]
