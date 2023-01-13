FROM node:latest

RUN mkdir -p /client/public /client/src /client/scripts /client/config
WORKDIR /client

COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json

RUN npm install

COPY ./public /client/public
COPY ./src /client/src
COPY ./scripts /client/scripts
COPY ./config /client/config

CMD ["npm", "run", "start"]
