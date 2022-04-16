FROM node:14-alpine

ARG CUID=1000

RUN deluser --remove-home node && addgroup -S nodeuser -g $CUID && adduser -u $CUID -S -G nodeuser

WORKDIR /home/nodeuser/app

COPY ./package*.json ./

RUN yarn install

COPY . .

USER nodeuser