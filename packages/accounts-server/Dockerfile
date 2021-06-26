FROM node:14-buster AS deps

ARG GRPC_HEALTH_PROBE_VERSION=v0.3.1

WORKDIR /usr/src/accounts

COPY ./package*.json ./lerna.json ./tsconfig.json ./
COPY ./packages/accounts-db/package.json ./packages/accounts-db/
COPY ./packages/accounts-proto-loader/package.json ./packages/accounts-proto-loader/
COPY ./packages/accounts-server/package.json ./packages/accounts-server/
COPY ./packages/accounts-service/package.json ./packages/accounts-service/
COPY ./packages/accounts-utils/package.json ./packages/accounts-utils/

RUN npm install --production
RUN cp -R node_modules node_modules_production
RUN npm install

COPY ./packages/accounts-db ./packages/accounts-db
COPY ./packages/accounts-proto-loader ./packages/accounts-proto-loader
COPY ./packages/accounts-server ./packages/accounts-server
COPY ./packages/accounts-service ./packages/accounts-service
COPY ./packages/accounts-utils ./packages/accounts-utils

RUN npm run generate
RUN npm run build

RUN cp -R node_modules node_modules_development

RUN wget -qO/bin/grpc_health_probe https://github.com/grpc-ecosystem/grpc-health-probe/releases/download/${GRPC_HEALTH_PROBE_VERSION}/grpc_health_probe-linux-amd64 && \
  chmod +x /bin/grpc_health_probe

FROM alpine:3.12 AS release

ARG V=14.8.0
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

COPY --from=deps /bin/grpc_health_probe /bin/
COPY --from=deps /usr/src/accounts/node_modules_production ./node_modules
COPY --from=deps /usr/src/accounts/node_modules_development/@prisma/client/ ./node_modules/@prisma/client/
COPY --from=deps /usr/src/accounts/node_modules_development/.prisma/client/ ./node_modules/.prisma/client/
COPY --from=deps /usr/src/accounts/packages/accounts-db/dist  ./packages/accounts-db/dist
COPY --from=deps /usr/src/accounts/packages/accounts-db/package.json ./packages/accounts-db/
COPY --from=deps /usr/src/accounts/packages/accounts-proto-loader/dist ./packages/accounts-proto-loader/dist
COPY --from=deps /usr/src/accounts/packages/accounts-proto-loader/generated ./packages/accounts-proto-loader/generated
COPY --from=deps /usr/src/accounts/packages/accounts-proto-loader/package.json ./packages/accounts-proto-loader/
COPY --from=deps /usr/src/accounts/packages/accounts-server/dist  ./packages/accounts-server/dist
COPY --from=deps /usr/src/accounts/packages/accounts-server/package.json ./packages/accounts-server/
COPY --from=deps /usr/src/accounts/packages/accounts-service/dist  ./packages/accounts-service/dist
COPY --from=deps /usr/src/accounts/packages/accounts-service/package.json ./packages/accounts-service/
COPY --from=deps /usr/src/accounts/packages/accounts-utils/dist  ./packages/accounts-utils/dist
COPY --from=deps /usr/src/accounts/packages/accounts-utils/package.json ./packages/accounts-utils/

EXPOSE 5000

ENV HOST 0.0.0.0
ENV PORT 5001
ENV NODE_ENV production

CMD [ "node", "./packages/accounts-server/dist/index.js" ]