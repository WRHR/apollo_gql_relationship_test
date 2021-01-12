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

  @Mutation(()=>Book)
  async createBook(@Arg('input') input:BookInput): Promise<Book>{
    let author = await Author.findOne(input.authorId)
    return Book.create({
      title:input.title

    })
  }
}
