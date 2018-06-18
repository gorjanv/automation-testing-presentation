FROM node:8.11.2-alpine

RUN mkdir /app

COPY /dist /app

WORKDIR /app

EXPOSE 3000

CMD [ "node", "server.js" ]