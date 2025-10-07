let myLibrary = [];

// DOM ELEMENTS
const bookContainer = document.querySelector(".books"); // Holds all book instances , used to add or remove book instances
const modal = document.querySelector("dialog"); // Pop-up box where you can input book info
const addNewBook = document.querySelector(".add_book"); // New Book button, use to open the dialog
const closeBookForm = document.querySelector(".dialog_close"); // Close button inside book card, closes modal popup
const form = document.querySelector("dialog form"); // Input fomr inside the dialog

// Functions

// Creates a consistent structure for all book instances that will be created
function Book(title, author, pages, isRead, id) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.id = id;

  // This if-else block handles the boolean value provided by the form input. The value is coming the form event listener.
  if (isRead) {
    this.isRead = "Read";
  } else {
    this.isRead = "Not read";
  }
}

// Checks current book's current isRead status
Book.prototype.toggleReadStatus = function () {
  if (this.isRead === "Read") {
    this.isRead = "Not read";
  } else {
    this.isRead = "Read";
  }
};

// Take params, create a book and then store it on the array
function addBookToLibrary(title, author, pages, isRead) {
  const id = self.crypto.randomUUID(); // Generates unique ID for each book created
  const book = new Book(title, author, pages, isRead, id);
  myLibrary.push(book);
  return book;
}

addBookToLibrary("Dune", "Frank Herbert", 412, true);

// Event Listeners

// Controls users interactions with book form popup
addNewBook.addEventListener("click", () => {
  modal.showModal();
});

closeBookForm.addEventListener("click", () => {
  modal.close();
});

form.addEventListener("submit", (event) => {
  event.preventDefault(); // stops page reload
});
