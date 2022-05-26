FROM node:alpine

WORKDIR /backend

COPY *.json .

RUN npm install

COPY . .

RUN npm run db:reset

CMD ["node", "index.js"]