FROM node:12.18.3-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN npm install pm2 -g
EXPOSE 3000
CMD ["pm2-runtime","app.js"]
