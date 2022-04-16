FROM node:16.14-alpine

WORKDIR /app

COPY ./package.json ./package.json
RUN yarn install
COPY . .

RUN npx next telemetry disable
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]