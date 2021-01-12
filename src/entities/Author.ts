import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  
} from "typeorm";
import { Book } from "./Book";

@ObjectType()
@Entity()
export class Author extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  hometown: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];

  @Field(()=>[Book], {nullable:true})
  allbooks(){
    return Book.find({authorId:this.id})
  }
}
