FROM node:latest

WORKDIR /usr/src

COPY package.json package-lock.json /usr/src/

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]