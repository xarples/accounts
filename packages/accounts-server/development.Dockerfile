FROM node:14-buster AS deps
# FROM node:14.17.1-alpine3.12 AS deps

ARG GRPC_HEALTH_PROBE_VERSION=v0.3.1

WORKDIR /usr/src/accounts

RUN npm install --global npm

COPY ./package*.json ./lerna.json ./
COPY ./packages/accounts-db/package.json ./packages/accounts-db/
COPY ./packages/accounts-config/package.json ./packages/accounts-config/
COPY ./packages/accounts-protobuf/package.json ./packages/accounts-protobuf/
COPY ./packages/accounts-server/package.json ./packages/accounts-server/
COPY ./packages/accounts-service/package.json ./packages/accounts-service/
COPY ./packages/accounts-utils/package.json ./packages/accounts-utils/

RUN npm install --production
RUN cp -R node_modules node_modules_production
RUN npm install

COPY ./packages/accounts-db ./packages/accounts-db
COPY ./packages/accounts-config ./packages/accounts-config
COPY ./packages/accounts-protobuf ./packages/accounts-protobuf
COPY ./packages/accounts-server ./packages/accounts-server
COPY ./packages/accounts-service ./packages/accounts-service
COPY ./packages/accounts-utils ./packages/accounts-utils

RUN npm run generate
RUN npm run build

EXPOSE 5001

ENV HOST 0.0.0.0
ENV PORT 5001
ENV NODE_ENV development

CMD [ "npm", "run", "dev"]

