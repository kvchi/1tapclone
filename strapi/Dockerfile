# Build the react app inside a node based container image
FROM node:18-alpine AS buildstage

WORKDIR /strapi

COPY . .

RUN rm -rf dist node_modules

RUN npm install
RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]