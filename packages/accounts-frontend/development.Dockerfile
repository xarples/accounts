FROM node:14-buster AS deps
# FROM node:14.8.0-alpine3.12 AS deps

WORKDIR /usr/src/accounts

RUN npm install --global npm

COPY ./package*.json ./lerna.json ./
COPY ./packages/accounts-config/package.json ./packages/accounts-config/
COPY ./packages/accounts-fastify-plugins/package.json ./packages/accounts-fastify-plugins/
COPY ./packages/accounts-client/package.json ./packages/accounts-client/
COPY ./packages/accounts-frontend/package.json ./packages/accounts-frontend/
COPY ./packages/accounts-protobuf/package.json ./packages/accounts-protobuf/
COPY ./packages/accounts-utils/package.json ./packages/accounts-utils/

# RUN npm install --production
# RUN cp -R node_modules node_modules_production
RUN npm install

COPY ./packages/accounts-config ./packages/accounts-config
COPY ./packages/accounts-fastify-plugins ./packages/accounts-fastify-plugins
COPY ./packages/accounts-client ./packages/accounts-client
COPY ./packages/accounts-frontend ./packages/accounts-frontend
COPY ./packages/accounts-protobuf ./packages/accounts-protobuf
COPY ./packages/accounts-utils ./packages/accounts-utils

RUN npm run generate
RUN npm run build

EXPOSE 5000

ENV HOST 0.0.0.0
ENV PORT 5000
ENV NODE_ENV production

CMD [ "npm", "run", "dev"]