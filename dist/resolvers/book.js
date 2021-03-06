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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookResolver = void 0;
const Book_1 = require("../entities/Book");
const type_graphql_1 = require("type-graphql");
const Author_1 = require("../entities/Author");
let BookInput = class BookInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], BookInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", Number)
], BookInput.prototype, "authorId", void 0);
BookInput = __decorate([
    type_graphql_1.InputType()
], BookInput);
let BookResolver = class BookResolver {
    books() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Book_1.Book.find();
        });
    }
    book(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Book_1.Book.findOne({ id: id });
        });
    }
    createBook(input) {
        return __awaiter(this, void 0, void 0, function* () {
            let findAuthor = yield Author_1.Author.findOne(input.authorId);
            let book = Book_1.Book.create({
                title: input.title,
                author: findAuthor,
            }).save();
            return book;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Book_1.Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "books", null);
__decorate([
    type_graphql_1.Query(() => Book_1.Book),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "book", null);
__decorate([
    type_graphql_1.Mutation(() => Book_1.Book),
    __param(0, type_graphql_1.Arg("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BookInput]),
    __metadata("design:returntype", Promise)
], BookResolver.prototype, "createBook", null);
BookResolver = __decorate([
    type_graphql_1.Resolver()
], BookResolver);
exports.BookResolver = BookResolver;
//# sourceMappingURL=book.js.map