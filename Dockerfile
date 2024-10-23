# Build the react app inside a node based container image
FROM node:20-alpine AS buildstage

WORKDIR /website

COPY . .

RUN rm -rf dist node_modules

RUN npm install
RUN npm run build

# Create the final container image
FROM nginxinc/nginx-unprivileged:alpine
COPY --from=buildstage /website/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf