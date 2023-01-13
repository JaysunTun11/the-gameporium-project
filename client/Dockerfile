FROM node:latest

RUN mkdir -p /client/public /client/src
WORKDIR /client

COPY package.json /client/package.json
COPY package-lock.json /client/package-lock.json

RUN npm install

COPY ./public /client/public
COPY ./src /client/src

CMD ["npm", "run", "start"]
