# Use the official image as a parent image
FROM node:current-slim

# Set the working directory
WORKDIR /app

# Copy the file from your host to your current location
COPY ./serverside/package.json ./

# Install dependencies
RUN npm install

RUN npm install -g nodemon

#RUN npm install --save-dev sequelize-cli

# Copy the rest of your app's source code from your host to your image filesystem.
COPY ./serverside .

# Run the specified command within the container.
CMD [ "nodemon", "index.js" ]