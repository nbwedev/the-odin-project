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
function Book(title, author, pages, isRead, id) {
  this.id = id; // Generate a unique id for each book
  this.title = title;
  this.author = author;
  this.page = pages;

  if (isRead) {
    this.isRead = "Read";
  } else {
    this.isRead = "Not Read";
  }
}

// Take params, create a book then store it in the array
function addBookToLibrary(title, author, pages, isRead) {
  const id = self.crypto.randomUUID();
  const book = new Book(title, author, pages, isRead, id);
  myLibrary.push(book);
  return book;
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const titleValue = document.querySelector(".title").value;
  const authorValue = document.querySelector(".author").value;
  const pagesValue = document.querySelector(".pages").value;
  let isRead = false;

  if (document.querySelector(".is-read").checked) {
    isReadValue = true;
  } else {
    isReadValue = false;
  }

  modal.close();

  addBookToLibrary(titleValue, authorValue, pagesValue, isReadValue);
  displayBooks();
});
