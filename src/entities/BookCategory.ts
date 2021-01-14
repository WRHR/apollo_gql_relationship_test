import { ObjectType } from "type-graphql";
import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Book } from "./Book";
import { Category } from "./Category";

@ObjectType()
@Entity()
export class BookCategory {
  @PrimaryColumn()
  bookId: number;

  @PrimaryColumn()
  categoryId: number;

  @ManyToOne(() => Book, (book) => book.categoryConnection, { primary: true })
  @JoinColumn({ name: "bookId" })
  book: Book;

  @ManyToOne(() => Category, (category) => category.bookConnection, {
    primary: true,
  })
  @JoinColumn({ name: "categoryId" })
  category: Category;
}
