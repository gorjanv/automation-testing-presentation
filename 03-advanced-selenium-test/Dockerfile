FROM selenium/standalone-chrome

USER root

RUN sudo apt-get update && \
    sudo apt-get install curl -y

RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -

RUN sudo apt-get install -y nodejs

RUN mkdir /app && \
    mkdir /screenshots

COPY . /app

WORKDIR /app

RUN npm install

CMD [ "npm", "run", "test" ]