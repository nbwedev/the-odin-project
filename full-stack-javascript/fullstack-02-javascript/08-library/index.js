const myLibrary = [];

// Book constructor
function Book(title, author, page, read) {
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

// // test
// addBookToLibrary("12", 12, 123, false);
// addBookToLibrary("12", 12, 123, true);

// console.log(myLibrary);
