FROM node:17-alpine

ARG CUID=1001

RUN deluser --remove-home node
RUN addgroup -g $CUID -S nodeuser
RUN adduser -u $CUID -S nodeuser -G nodeuser

RUN npm install -g npm@8.7.0

WORKDIR /home/nodeuser/app

RUN mkdir -p /node_modules/.cache

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN npm install

COPY . .

USER nodeuser