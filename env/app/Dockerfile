FROM node:6.9

RUN apt-get update && apt-get install -y ocaml libelf-dev
RUN npm install -g yarn && npm install -g sequelize-cli && npm install -g flow-bin

# https://hackernoon.com/using-yarn-with-docker-c116ad289d56#.x76srq74o
ADD package.json /tmp/package.json
RUN cd /tmp && yarn
RUN mkdir -p /app && cd /app && ln -s /tmp/node_modules
