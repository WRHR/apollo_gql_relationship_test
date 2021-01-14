"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const typeorm_1 = require("typeorm");
const type_graphql_1 = require("type-graphql");
const Author_1 = require("./Author");
const BookCategory_1 = require("./BookCategory");
let Book = class Book extends typeorm_1.BaseEntity {
    authorInfo() {
        return Author_1.Author.findOne({ id: this.authorId });
    }
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Book.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Book.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Book.prototype, "authorId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Author_1.Author, (author) => author.books),
    __metadata("design:type", Author_1.Author)
], Book.prototype, "author", void 0);
__decorate([
    type_graphql_1.Field(() => Author_1.Author),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Book.prototype, "authorInfo", null);
__decorate([
    typeorm_1.OneToMany(() => BookCategory_1.BookCategory, (bc) => bc.book, { cascade: true }),
    __metadata("design:type", Array)
], Book.prototype, "categoryConnection", void 0);
Book = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Book);
exports.Book = Book;
//# sourceMappingURL=Book.js.map