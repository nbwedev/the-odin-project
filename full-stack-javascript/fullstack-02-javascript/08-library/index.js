const myLibrary = [];

const booksContainer = document.querySelector(".books"); // container for book cards
const newBookButton = document.querySelector(".add_book"); // opens pop-up new book form
const modal = document.querySelector("dialog"); // the pop-up
const closeModalButton = document.querySelector("dialog .dialog_close"); // close button inside pop up form
const form = document.querySelector("form"); // form input that contains book details

// Book actions inside main
const toggleReadButtons = document.querySelectorAll(".book_toggle-read");
const removeBookButtons = document.querySelectorAll(".book_remove-btn");

// Creates book with shared methods and properties
function Book(title, author, pages, read) {
  this.id = crypto.randomUUID(); // Generate a unique id for each book
  this.title = title;
  this.author = author;
  this.page = pages;
  this.read = read;

  this.info = function () {
    const readStatus = this.read ? "read" : "not read yet";
    return `${this.title} by ${this.author}, ${pages} pages, ${readStatus}`;
  };
}

// Take params, create a book then store it in the array
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

// Loops each book on the array and displays it
function listOfBooks() {
  for (const book of myLibrary) {
    console.log(book);
  }
}

listOfBooks();

// EVENT LISTENERS

newBookButton.addEventListener("click", () => {
  modal.showModal();
});

closeModalButton.addEventListener("click", () => {
  modal.close();
});
