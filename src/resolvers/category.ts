import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Category } from "../entities/Category";

@Resolver()
export class CategoryResolver {
  @Query(() => [Category])
  async categories() {
    return await Category.find();
  }

  @Mutation(() => Category)
  async createCategory(@Arg("name") name: string): Promise<Category | null> {
    let category = await Category.create({ name });
    if (Category.find({ name: category.name })) {
      return null;
    } else {
      category.save();
    }
    return category;
  }

  @Mutation(() => Category)
  async updateCategory(
    @Arg("id") id: number,
    @Arg("name") name: string
  ): Promise<Category | undefined> {
    let category = await Category.findOne({id})
    if(!category) return undefined
    if(category.name !== 'undefined'){
      Category.update({id}, {name})
      category = await Category.findOne({id})
    }
    return category
  }
}
