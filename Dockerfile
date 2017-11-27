FROM node:8
MAINTAINER Jared De La Cruz "jared@jareddlc.com"

WORKDIR /src

# Install app dependencies
RUN cd /src
ADD package.json /src/
RUN npm install

ADD config/ /src/config/
ADD lib/ /src/lib/
ADD routes/ /src/routes/
ADD site/ /src/site/
ADD index.js /src/
ADD install.js /src/

RUN npm run install

EXPOSE 8080

ENV NODE_ENV production
CMD ["node", "/src/index.js"]
