import { Book } from "../entities/Book";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

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
    return Book.create({
      ...input
    }).save()
  }
}
