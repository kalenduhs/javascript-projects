// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.numberOfPages = numberOfPages;
        this.timesCheckedOut = timesCheckedOut;
        this.discarded = discarded;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded);
    }
}

class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numberOfPages, timesCheckedOut, discarded)
    }
}

// Declare the objects for exercises 2 and 3 here:

let shuttleBuilding = new Manual('Top Secret Shuttle building Manual', 'Redacted', 2013, '0000000000', 1147, 1, 'No');


let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');


// Code exercises 4 & 5 here: