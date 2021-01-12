import { Book } from "../entities/Book";
import { Query, Resolver } from "type-graphql";

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  async books() {
    return await Book.find();
  }
}
