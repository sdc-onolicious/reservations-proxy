FROM node:10.15-alpine

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]