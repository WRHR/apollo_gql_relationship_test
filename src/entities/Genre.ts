import { Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Category } from "./Category";
import { Book } from "./Book";

@Entity()
export class Genre {
  @PrimaryColumn("int")
  bookId: number;

  @PrimaryColumn("int")
  categoryId: number;

  @OneToOne(() => Book)
  @JoinColumn()
  book: Book;

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;
}
