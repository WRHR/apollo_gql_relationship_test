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
exports.BookCategory = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Book_1 = require("./Book");
const Category_1 = require("./Category");
let BookCategory = class BookCategory {
};
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], BookCategory.prototype, "bookId", void 0);
__decorate([
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], BookCategory.prototype, "categoryId", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Book_1.Book, (book) => book.categoryConnection, { primary: true }),
    typeorm_1.JoinColumn({ name: "bookId" }),
    __metadata("design:type", Book_1.Book)
], BookCategory.prototype, "book", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Category_1.Category, (category) => category.bookConnection, {
        primary: true,
    }),
    typeorm_1.JoinColumn({ name: "categoryId" }),
    __metadata("design:type", Category_1.Category)
], BookCategory.prototype, "category", void 0);
BookCategory = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], BookCategory);
exports.BookCategory = BookCategory;
//# sourceMappingURL=BookCategory.js.map