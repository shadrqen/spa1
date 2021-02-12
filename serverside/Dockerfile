# Use the official image as a parent image
FROM node:current-slim

# Set the working directory
WORKDIR /app

# Copy the file from your host to your current location
COPY package.json ./

# Run the command inside your image filesystem
#RUN npm install -g npm@latest
RUN npm install -g npm@7.5.3
RUN npm install

RUN npm install -g nodemon

#RUN npm install --save-dev sequelize-cli

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Run the specified command within the container.
CMD [ "nodemon", "index.js" ]

#RUN npx sequelize-cli db:migrate
