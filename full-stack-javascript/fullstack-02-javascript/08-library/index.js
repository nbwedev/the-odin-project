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
}

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
