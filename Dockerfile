#源码构建
FROM node:latest AS build

WORKDIR /build

COPY . .

RUN npm install -g pnpm \
    && pnpm install \
    && pnpm build

#运行时环境
FROM nginx:latest AS run

COPY --from=build /build/dist /usr/share/nginx/html

VOLUME /etc/nginx/conf.d/
VOLUME /etc/nginx/ssl/

EXPOSE 80
EXPOSE 443