FROM node:latest as builder
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:latest
COPY --from=builder /usr/src/app/dist/angular-tour-of-heroes /usr/share/nginx/html
EXPOSE 80