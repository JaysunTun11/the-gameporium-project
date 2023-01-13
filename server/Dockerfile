FROM node:latest

RUN mkdir -p /server/middleware /server/utils /server/routes 
WORKDIR /server

COPY package.json /server/package.json
COPY package-lock.json /server/package-lock.json

RUN npm install

COPY ./*.js /server/
COPY ./middleware/ /server/middleware
COPY ./utils/ /server/utils
COPY ./routes/ /server/routes


CMD ["npm", "run", "start"]
