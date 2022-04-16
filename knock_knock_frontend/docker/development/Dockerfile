FROM node:14-alpine

ARG CUID=1000

RUN addgroup -g $CUID -S nodeuser && adduser -u $CUID -S nodeuser -G nodeuser

WORKDIR /home/nodeuser/app

COPY ./package*.json ./

RUN yarn install

COPY . .

USER nodeuser