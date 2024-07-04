FROM node:20.10-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build

# Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]