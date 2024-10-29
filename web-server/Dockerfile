FROM node:20.17 AS build-stage

RUN mkdir /usr/app

COPY ./frontend /user/app

WORKDIR /user/app

RUN npm install

ENV PATH /user/app/node_modules/.bin:$PATH

ARG vite_api_url
ARG base_url

ENV vite_api_url $vite_api_url
ENV base_url $base_url

RUN npm run build

FROM nginx:1.26

ARG host
ENV host $host

COPY ./web-server/development.conf /etc/nginx/templates/default.conf.template

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /user/app/dist .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]