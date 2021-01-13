import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Author } from "./Author";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  authorId: number;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @Field(() => Author)
  authorInfo() {
    return Author.findOne({ id: this.authorId });
  }

  @ManyToMany(()=>Category)
  @JoinTable()
  categories: Category[]
}
