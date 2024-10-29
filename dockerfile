# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN yarn build

# Install serve to serve the build
RUN yarn global add serve

# Set the command to serve the build
CMD ["serve", "-s", "build"]

# Expose the port the app runs on
EXPOSE 3000
