import { Resolver, Query, Mutation, Arg, InputType, Field } from "type-graphql";
import { Author } from "../entities/Author";

@InputType()
class AuthorInput {
  @Field()
  name: string;

  @Field()
  hometown: string;
}

@Resolver()
export class AuthorResolver {
  @Query(() => [Author])
  async authors(): Promise<Author[]> {
    return await Author.find();
  }

  @Query(()=>Author)
  async findAtuhor(@Arg('id') id:number):Promise<Author | undefined>{
    return await Author.findOne(id)
  }

  @Mutation(() => Author)
  async createAuthor(
    @Arg("input") input: AuthorInput
  ): Promise<Author | undefined> {
    return Author.create({
      ...input,
    }).save();
  }

  @Mutation(() => Author)
  async updateAuthor(
    @Arg("input") input: AuthorInput,
    @Arg("id") id: number
  ): Promise<Author | undefined> {
    let author = await Author.findOne(id);
    if (!author) {
      return undefined;
    }

    if (typeof input !== "undefined") {
      Author.update({ id }, { ...input });
      author = await Author.findOne(id);
    }
    return author;
  }

  @Mutation(() => Boolean)
  async deleteAuthor(@Arg("id") id: number): Promise<boolean> {
    await Author.delete(id);
    return true;
  }
}
