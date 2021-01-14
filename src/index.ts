import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import { MyContext } from "./types";
import { HelloResolver } from "./resolvers/hello";
import { User } from "./entities/User";
import { Author } from "./entities/Author";
import { AuthorResolver } from "./resolvers/author";
import { Book } from "./entities/Book";
import { BookResolver } from "./resolvers/book";
import { Category } from "./entities/Category";
import { CategoryResolver } from "./resolvers/category";
import { BookCategory } from "./entities/BookCategory";

const main = async () => {
  await createConnection({
    type: "postgres",
    database: "apolloRelTest",
    logging: true,
    synchronize: true,
    entities: [User, Author, Book, Category, BookCategory],
  });

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver,
        AuthorResolver,
        BookResolver,
        CategoryResolver,
      ],
      validate: false,
    }),
    context: ({ req, res }): MyContext => ({ req, res }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(8080, () => {
    console.log("server started on port:8080...");
  });
};

main();
