# syntax=docker/dockerfile:experimental
FROM node:16.0.0
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
RUN npm install -g nodemon
CMD nodemon app.js