FROM node:22-alpine as builder

RUN mkdir /app
COPY ./ /app/
WORKDIR /app

RUN yarn
RUN yarn build

FROM nginx:1.27.0-alpine

COPY --from=builder /app/dist/ /usr/share/nginx/html

COPY <<EOF /etc/nginx/nginx.conf
http {
    server {
        
        listen 80;

        location / {
            include /etc/nginx/mime.types;
            root /usr/share/nginx/html;
        }

        location /app {
            proxy_pass http://backend:8001;
        }
    }
}

events {}
EOF