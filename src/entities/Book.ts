import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Author } from "./Author";

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
}
