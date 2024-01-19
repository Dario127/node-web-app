FROM node:18-alpine
WORKDIR /app

COPY ./packag*.json /app
RUN npm install

COPY . /app
EXPOSE 8080

CMD [ "npm", "start" ]