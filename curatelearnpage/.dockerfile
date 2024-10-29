# Use an official Node.js runtime as the base image
FROM node
# Set the working directory
WORKDIR /app
# Copy package.json and package-lock.json for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the application
RUN npm run build

# Expose the application port
EXPOSE 3000
# Command to serve the built application
CMD ["npm", "run", "start"]
