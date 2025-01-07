FROM node:22-alpine as builder

RUN mkdir /app
COPY ./ /app/
WORKDIR /app

RUN yarn
RUN yarn build

FROM nginx:1.27.0-alpine

COPY --from=builder /app/dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/templates/nginx.conf.template
ENV NGINX_ENVSUBST_OUTPUT_DIR "/etc/nginx"