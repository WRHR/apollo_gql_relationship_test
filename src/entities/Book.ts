import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Field, ObjectType } from "type-graphql";
import { Author } from "./Author";
import { BookCategory } from "./BookCategory";

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

  @OneToMany(() => BookCategory, (bc) => bc.book, {cascade:true})
  categoryConnection: BookCategory[];
}
