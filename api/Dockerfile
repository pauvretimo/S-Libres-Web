FROM node:18.9.0-alpine as build

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY ./ .
COPY ./calendar/getter.sh /getter.sh

RUN echo "0 * * * * /bin/sh /getter.sh" >> /crontab \
    && chmod +x /getter.sh \
    && crontab /crontab

RUN npm install --silent

EXPOSE 3001
CMD /getter.sh && crond && node server.js
