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
exports.AuthorResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Author_1 = require("../entities/Author");
let AuthorInput = class AuthorInput {
};
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AuthorInput.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    __metadata("design:type", String)
], AuthorInput.prototype, "hometown", void 0);
AuthorInput = __decorate([
    type_graphql_1.InputType()
], AuthorInput);
let AuthorResolver = class AuthorResolver {
    authors() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Author_1.Author.find();
        });
    }
    findAtuhor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Author_1.Author.findOne(id);
        });
    }
    createAuthor(input) {
        return __awaiter(this, void 0, void 0, function* () {
            return Author_1.Author.create(Object.assign({}, input)).save();
        });
    }
    updateAuthor(input, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let author = yield Author_1.Author.findOne(id);
            if (!author) {
                return undefined;
            }
            if (typeof input !== "undefined") {
                Author_1.Author.update({ id }, Object.assign({}, input));
                author = yield Author_1.Author.findOne(id);
            }
            return author;
        });
    }
    deleteAuthor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield Author_1.Author.delete(id);
            return true;
        });
    }
};
__decorate([
    type_graphql_1.Query(() => [Author_1.Author]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "authors", null);
__decorate([
    type_graphql_1.Query(() => Author_1.Author),
    __param(0, type_graphql_1.Arg('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "findAtuhor", null);
__decorate([
    type_graphql_1.Mutation(() => Author_1.Author),
    __param(0, type_graphql_1.Arg("input")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthorInput]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "createAuthor", null);
__decorate([
    type_graphql_1.Mutation(() => Author_1.Author),
    __param(0, type_graphql_1.Arg("input")),
    __param(1, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AuthorInput, Number]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "updateAuthor", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AuthorResolver.prototype, "deleteAuthor", null);
AuthorResolver = __decorate([
    type_graphql_1.Resolver()
], AuthorResolver);
exports.AuthorResolver = AuthorResolver;
//# sourceMappingURL=author.js.map