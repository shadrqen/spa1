# Use the official image as a parent image
FROM node:current-slim

# Set the working directory
WORKDIR /app

# Copy the file from your host to your current location
COPY ./db/package.json ./

# Install project dependencies
RUN npm install

RUN npm install -g nodemon

#RUN npm install --save-dev sequelize-cli

# Copy the rest of your app's source code from your host to your image filesystem.
COPY ./db .

# Run the specified command within the container.
CMD [ "nodemon", "index.js" ]

#RUN npx sequelize-cli db:migrate
