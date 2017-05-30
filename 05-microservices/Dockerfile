FROM node:latest

RUN mkdir /app

COPY package.json /app/package.json
COPY gateway.js /app/gateway.js

WORKDIR /app

RUN npm install
RUN npm install -g nodemon

EXPOSE 80

CMD ["nodemon", "gateway.js"]