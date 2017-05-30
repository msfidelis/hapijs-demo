FROM node:alpine

COPY ./src /app

WORKDIR /app

RUN npm install 

EXPOSE 1300

CMD ["node", "app.js"]