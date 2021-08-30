FROM node:14 as react-builder

WORKDIR /app

RUN npm install yarn
COPY ./react-app /app
RUN yarn install
RUN yarn build

FROM nginx:latest
COPY --from=react-builder /app/build /usr/share/nginx/html
