FROM node:current-alpine AS builder

RUN apk add git

RUN npm install -g pnpm

WORKDIR /srv

COPY package.json pnpm-lock.yaml
RUN pnpm install

COPY . .

RUN pnpm run build

FROM nginx:stable-alpine

RUN mkdir /app

ARG APP_VSN
ARG APP_NAME

LABEL maintainer=Byzanteam
LABEL jet_app=${APP_NAME}
LABEL jet_app_vsn=${APP_VSN}

COPY --from=builder /srv/dist /app/dist

COPY nginx/start.sh /app/start-nginx.sh
COPY nginx/nginx.conf /etc/nginx/nginx.conf

ENTRYPOINT ["/app/start-nginx.sh"]
