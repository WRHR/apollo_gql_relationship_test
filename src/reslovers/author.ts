import {Resolver, Query, Mutation, Arg, InputType, Field} from 'type-graphql'
import {Author} from '../entities/Author'

@InputType()
class AuthorInput{
  @Field()
  name: string

  @Field()
  hometown:string
}

@Resolver()
export class AuthorResolver {
  @Query(()=>[Author])
  async authors():Promise<Author[]> {
    return await Author.find()
  }
  @Mutation()
  async createAuthor(@Arg('input') input: AuthorInput){

    return Author.create({
      ...input
    }).save()
  }
}