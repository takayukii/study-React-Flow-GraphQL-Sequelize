# https://github.com/webpack/webpack/issues/2463
FROM node:4.7.2

RUN apt-get update && apt-get install -y ocaml libelf-dev
RUN npm install -g yarn && npm install -g sequelize-cli && npm install -g flow-bin && npm install -g flow-typed && npm install -g webpack

# https://hackernoon.com/using-yarn-with-docker-c116ad289d56#.x76srq74o
ADD package.json /tmp/package.json
RUN cd /tmp && yarn
RUN mkdir -p /app && cd /app && ln -s /tmp/node_modules
