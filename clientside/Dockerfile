FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY ./clientside/package*.json ./

# Install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY ./clientside .

# build app for production with minification
#RUN npm run build

EXPOSE 4000

CMD [ "npm", "run", "dev" ]