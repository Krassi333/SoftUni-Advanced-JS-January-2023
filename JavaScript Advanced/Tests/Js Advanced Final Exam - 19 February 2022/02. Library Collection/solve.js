class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    };

    addBook(bookName, bookAuthor) {
        if (this.books.length == this.capacity) {
            throw new Error('Not enough space in the collection.')
        };

        this.books.push({
            bookName,
            bookAuthor,
            payed: false
        });
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    };

    payBook(bookName) {
        for (let el of this.books) {
            if (el.bookName == bookName) {
                if (el.payed == true) {
                    throw new Error(`${bookName} has already been paid.`);
                } else {
                    el.payed = true;
                    return `${bookName} has been successfully paid.`
                }
            }
        }

        throw new Error(`${bookName} is not in the collection.`)
    };

    removeBook(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookName == bookName) {

                if (this.books[i].payed == false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`)
                } else {
                    this.books.splice(i, 1);
                    return `${bookName} remove from the collection.`
                }
            }
        }

        throw new Error("The book, you're looking for, is not found.")
    };

    getStatistics(bookAuthor) {
        if (bookAuthor == undefined) {
            let result = `The book collection has ${this.capacity - this.books.length} empty spots left.`;
            let sorted = this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            for (let el of sorted) {
                result += `\n${el.bookName} == ${el.bookAuthor} - `

                if (el.payed) {
                    result += 'Has Paid.';
                } else {
                    result += 'Not Paid.'
                }
            }

            return result

        } else {
            let matches = [];

            for (let el of this.books) {
                if (el.bookAuthor == bookAuthor) {
                    matches.push(el);
                }
            };

            let result = '';

            for (let el of matches) {
                result += `\n${el.bookName} == ${el.bookAuthor} - `;

                if (el.payed) {
                    result += 'Has Paid.';
                } else {
                    result += `Not Paid.`
                }
            };

            if (result == '') {
                throw new Error(`${bookAuthor} is not in the collection.`)
            } else {
                return result.slice(1);
            }

        }
    }
}

const library = new LibraryCollection(2)
console.log(library.addBook('Don Quixote', 'Miguel de Cervantes'));
console.log(library.getStatistics('Miguel de Cervantes'));
