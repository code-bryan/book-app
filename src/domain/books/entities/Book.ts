export default class Book {
    id: string;
    name: string;
    image: string;
    authors: string[];

    constructor(id: string, name: string, image: string, authors: string[]) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.authors = authors;
    }
}