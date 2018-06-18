FROM cypress/browsers:chrome67

USER root

RUN mkdir /app

COPY . /app

WORKDIR /app

RUN npm install

CMD [ "npm", "run", "test:headless" ]