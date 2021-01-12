import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import {buildSchema} from 'type-graphql'
import { createConnection } from "typeorm";
import { MyContext } from "./types";
import { HelloResolver } from "./reslovers/hello";

const main = async () => {
  await createConnection({
    type:'postgres',
    database:"apolloRelTest",
    logging: true,
    synchronize: true,
    entities:[]
  })

  const app = express()

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers:[HelloResolver],
      validate:false
    }),
    context:({req, res}): MyContext=> (
      {req, res }
    )
  })

  apolloServer.applyMiddleware({
    app,
    cors:false
  })

  app.listen(8080, ()=> {
    console.log("server started on port:8080...")
  })
};

main();
