import { Book } from "../entities/Book";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Author } from "../entities/Author";

@InputType()
class BookInput {
  @Field()
  title: string;

  @Field()
  authorId: number;
}

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  async books() {
    return await Book.find();
  }

  @Query(() => Book)
  async book(@Arg("id") id: number) {
    return await Book.findOne({ id: id });
  }

  @Mutation(() => Book)
  async createBook(@Arg("input") input: BookInput): Promise<Book> {
    let findAuthor = await Author.findOne(input.authorId);
    let book = Book.create({
      title: input.title,
      author: findAuthor,
    }).save();
    return book;
  }
}
