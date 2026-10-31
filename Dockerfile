
# Use Node.js as the base image
FROM node:20

# Set working directory inside container
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Application uses port 3000
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
