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

RUN npm install --production
RUN cp -R node_modules node_modules_production
RUN npm install

COPY ./packages/accounts-config ./packages/accounts-config
COPY ./packages/accounts-fastify-plugins ./packages/accounts-fastify-plugins
COPY ./packages/accounts-client ./packages/accounts-client
COPY ./packages/accounts-frontend ./packages/accounts-frontend
COPY ./packages/accounts-protobuf ./packages/accounts-protobuf
COPY ./packages/accounts-utils ./packages/accounts-utils

RUN npm run generate
RUN npm run build

RUN cp -R node_modules node_modules_development

FROM alpine:3.12 AS release

ARG V=14.17.1
ARG FILE=node-v$V-linux-x64-musl.tar.xz

RUN apk add --no-cache libstdc++ \
  && apk add --no-cache --virtual .deps curl \
  && curl -fsSLO --compressed \
  "https://unofficial-builds.nodejs.org/download/release/v$V/$FILE" \
  && tar -xJf $FILE -C /usr/local --strip-components=1 \
  && rm -f $FILE /usr/local/bin/npm /usr/local/bin/npx \
  && rm -rf /usr/local/lib/node_modules \
  && apk del .deps

WORKDIR /usr/src/accounts

COPY --from=deps /usr/src/accounts/node_modules_production ./node_modules
COPY --from=deps /usr/src/accounts/packages/accounts-config/dist  ./packages/accounts-config/dist
COPY --from=deps /usr/src/accounts/packages/accounts-config/package.json ./packages/accounts-config/
COPY --from=deps /usr/src/accounts/packages/accounts-fastify-plugins/dist  ./packages/accounts-fastify-plugins/dist
COPY --from=deps /usr/src/accounts/packages/accounts-fastify-plugins/package.json ./packages/accounts-fastify-plugins/
COPY --from=deps /usr/src/accounts/packages/accounts-client/dist  ./packages/accounts-client/dist
COPY --from=deps /usr/src/accounts/packages/accounts-client/package.json ./packages/accounts-client/
COPY --from=deps /usr/src/accounts/packages/accounts-frontend/.nuxt  ./packages/accounts-frontend/.nuxt
COPY --from=deps /usr/src/accounts/packages/accounts-frontend/dist  ./packages/accounts-frontend/dist
COPY --from=deps /usr/src/accounts/packages/accounts-frontend/package.json ./packages/accounts-frontend/
COPY --from=deps /usr/src/accounts/packages/accounts-frontend/nuxt.config.js ./packages/accounts-frontend/
COPY --from=deps /usr/src/accounts/packages/accounts-protobuf/dist ./packages/accounts-protobuf/dist
COPY --from=deps /usr/src/accounts/packages/accounts-protobuf/generated ./packages/accounts-protobuf/generated
COPY --from=deps /usr/src/accounts/packages/accounts-protobuf/package.json ./packages/accounts-protobuf/
COPY --from=deps /usr/src/accounts/packages/accounts-utils/dist  ./packages/accounts-utils/dist
COPY --from=deps /usr/src/accounts/packages/accounts-utils/package.json ./packages/accounts-utils/

EXPOSE 5000

ENV HOST 0.0.0.0
ENV PORT 5000
ENV NODE_ENV production

CMD [ "node", "./packages/accounts-frontend/dist/index.js" ]