import {Query, Resolver} from 'type-graphql'
import {Category} from '../entities/Category'

@Resolver()
export class CategoryResolver {
  @Query(()=>[Category])
  async categories(){
    return await Category.find()
  }
}