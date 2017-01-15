# study-Flow-React-GraphQL-Sequelize

This repo is for study to combination of Flowtype, React, GraphQL and Sequelize.

## Setup

Firstly run `docker-compose up`

```
$ docker-compose up
```

Then run following commands.

```
$ docker-compose run app yarn install
$ docker-compose run app npm run build
$ docker-compose run app sequelize db:migrate
$ docker-compose run app sequelize db:seed:all
```

Or you can login app container

```
$ docker-compose run app bash
```

## GraphQL

### Trend

* [npm trends](http://www.npmtrends.com/graphql-vs-hapi-vs-koa)
* [API Layers](http://stateofjs.com/2016/api/)

### Using Schema Language

* [GraphQL Schema Language Cheat Sheet](https://wehavefaces.net/graphql-shorthand-notation-cheatsheet-17cd715861b6#.x5ej12z27)
* [GraphQL-tools](https://github.com/apollostack/graphql-tools)

To use GraphQL schema language instead of general API, graphql-tools is very much usable even though it isn't official.
 
### Authentication

* [A guide to authentication in GraphQL](https://dev-blog.apollodata.com/a-guide-to-authentication-in-graphql-e002a4039d1#.r0bghb7ox)

Basically req.user is available in context, so you can control flow even in GraphQL context.

## Flowtype

### Abstract

* [実践投入してわかったflowtypeのメリデメ](http://sssslide.com/speakerdeck.com/shinout/shi-jian-tou-ru-sitewakatutaflowtypefalsemerideme)
* [npm trends](http://www.npmtrends.com/typescript-vs-flow-bin)

