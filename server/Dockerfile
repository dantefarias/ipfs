FROM node:lts-gallium

WORKDIR /usr/app/

COPY package*.json ./
RUN npm install
RUN rm -f .npmrc

COPY . .

CMD [ "node", "src/server/index.js" ]