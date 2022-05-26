FROM node:alpine

WORKDIR /backend

COPY *.json .

RUN npm install && npm run db:reset

COPY . .

CMD ["node", "index.js"]