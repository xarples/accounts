FROM node:14-buster AS deps
# FROM node:14.8.0-alpine3.12 AS deps

WORKDIR /usr/src/accounts

RUN npm install --global npm

COPY ./package*.json ./lerna.json ./
COPY ./packages/accounts-client/package.json ./packages/accounts-client/
COPY ./packages/developers-frontend/package.json ./packages/developers-frontend/
COPY ./packages/accounts-proto-loader/package.json ./packages/accounts-proto-loader/
COPY ./packages/accounts-utils/package.json ./packages/accounts-utils/

RUN npm install --production
RUN cp -R node_modules node_modules_production
RUN npm install

COPY ./packages/accounts-client ./packages/accounts-client
COPY ./packages/developers-frontend ./packages/developers-frontend
COPY ./packages/accounts-proto-loader ./packages/accounts-proto-loader
COPY ./packages/accounts-utils ./packages/accounts-utils

RUN npm run generate
RUN npm run build

EXPOSE 5002

ENV HOST 0.0.0.0
ENV PORT 5002
ENV NODE_ENV production

CMD [ "npm", "run", "dev"]