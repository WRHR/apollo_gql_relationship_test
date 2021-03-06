"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("./entities/User");
const Author_1 = require("./entities/Author");
const author_1 = require("./resolvers/author");
const Book_1 = require("./entities/Book");
const book_1 = require("./resolvers/book");
const Category_1 = require("./entities/Category");
const category_1 = require("./resolvers/category");
const BookCategory_1 = require("./entities/BookCategory");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection({
        type: "postgres",
        database: "apolloRelTest",
        logging: true,
        synchronize: true,
        entities: [User_1.User, Author_1.Author, Book_1.Book, Category_1.Category, BookCategory_1.BookCategory],
    });
    const app = express_1.default();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: yield type_graphql_1.buildSchema({
            resolvers: [author_1.AuthorResolver, book_1.BookResolver, category_1.CategoryResolver],
            validate: false,
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    apolloServer.applyMiddleware({
        app,
        cors: false,
    });
    app.listen(8080, () => {
        console.log("server started on port:8080...");
    });
});
main();
//# sourceMappingURL=index.js.map