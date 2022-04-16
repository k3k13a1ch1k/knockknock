FROM node:14-alpine

ARG CUID=1000

RUN deluser --remove-home node
RUN addgroup -g $CUID -S nodeuser
RUN adduser -u $CUID -S nodeuser -G nodeuser

WORKDIR /home/nodeuser/app

COPY ./package*.json ./

RUN yarn install

COPY . .

USER nodeuser