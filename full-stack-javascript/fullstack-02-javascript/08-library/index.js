const myLibrary = [];

// Creates book with shared methods and properties
function Book(title, author, page, read) {
  this.id = crypto.randomUUID(); // Generate a unique id for each book
  this.title = title;
  this.author = author;
  this.page = page;
  this.read = read;

  this.info = function () {
    const readStatus = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${page} pages, ${readStatus}`;
  };
}

// Take params, create a book then store it in the array
function addBookToLibrary(title, author, page, read) {
  const book = new Book(title, author, page, read);
  myLibrary.push(book);
}

addBookToLibrary("ABC", "12", 123, false);
console.log(myLibrary[0].info());
