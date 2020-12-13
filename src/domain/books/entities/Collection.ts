import { queries } from "@testing-library/react";

export default class Collection {
    id: string;
    name: string;
    image: string;
    quotes: string[];

    constructor(id: string, name: string, image: string, quotes: string[]) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.quotes = quotes;
    }
}