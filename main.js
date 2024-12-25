function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${pages} pages, ${read}`
    }
}

Book.prototype.type = 'paperback'


const book1 = new Book("Wolf's Empire: Gladiator",
    "Claudia Christian & Morgan Grant Buchanan",
    495,
    "re-reading"
);


