FROM node:14-alpine

ARG CUID=1001

RUN deluser --remove-home node
RUN addgroup -g $CUID -S nodeuser
RUN adduser -u $CUID -S nodeuser -G nodeuser

WORKDIR /home/nodeuser/app

RUN mkdir -p /home/nodeuser/app/node_modules/.cache

COPY ./package*.json ./

RUN yarn install -g --unsafe-perm=true --allow-root  

COPY . .

USER nodeuser