import Book from "../entities/Book";

const Img = require('assets/images/book-image.png');

export default [
    new Book("numberone", "The Holy Biblie", Img, ["Steven King"], []),
    new Book("numbertwo", "The Holy Biblie", Img, ["Steven King"], []),
    new Book("numberthree", "The Holy Biblie", Img, ["Steven King"], []),
    new Book("numberfour", "The Holy Biblie", Img, ["Steven King"], []),
]