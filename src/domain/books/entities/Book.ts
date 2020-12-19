import Category from "./Category";

export default class Book {
    id: string;
    name: string;
    image: string;
    authors: string[];
    categories: Category[];

    constructor(id: string, name: string, image: string, authors: string[], categories: Category[]) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.authors = authors;
        this.categories = categories;
    }
}