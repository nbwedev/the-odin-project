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

// Take params, creates a book, generates a unique ID for each book and then store it on the array
function addBookToLibrary(title, author, pages, isRead) {
  const id = self.crypto.randomUUID(); // Generates unique ID for each book created
  const book = new Book(title, author, pages, isRead, id);
  myLibrary.push(book);
  return book;
}

// addBookToLibrary("Dune", "Frank Herbert", 412, true); test if addBookToLibrary works > change return to log

function displayBooks() {
  bookContainer.innerHTML = "";
  const toggle_red = "#a5031c";
  const toggle_blue = "#28388f";

  // How each book card looks like
  for (const book of myLibrary) {
    const bookElement = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const isRead = document.createElement("p");
    const removeBookButton = document.createElement("button");
    const toggleReadButton = document.createElement("button");

    // Applies the CSS style
    bookElement.classList.add("book");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    isRead.classList.add("is-read");
    removeBookButton.classList.add("book_remove-btn");
    toggleReadButton.classList.add("book_toggle-read");
    removeBookButton.classList.add(book.id);

    // sets the text inside the element
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = "A " + book.pages + " page book by ";
    isRead.textContent = book.isRead;
    removeBookButton.textContent = "x";
    bookElement.setAttribute("id", book.id);

    // Book toggle - read status logic
    if (book.isRead === "Read") {
      toggleReadButton.style.backgroundColor = toggle_blue;
    } else {
      toggleReadButton.style.backgroundColor = toggle_red;
    }

    // Add book element to book container
    bookElement.appendChild(toggleReadButton);
    bookElement.appendChild(removeBookButton);
    bookElement.appendChild(title);
    bookElement.appendChild(pages);
    bookElement.appendChild(author);
    bookContainer.appendChild(bookElement);
  }

  const removeBook = document.querySelectorAll(".book_remove-btn");
  const toggleReadButton = document.querySelectorAll(".book_toggle-read");

  for (let i = 0; i < removeBook.length; i++) {
    removeBook[i].addEventListener("click", (event) => {
      const parentID = event.target.parentNode.id;
      const bookToBeRemoved = document.getElementById(`${parentID}`);
      bookToBeRemoved.remove();
      books = books.filter((book) => book.id !== parentID);
      displayBooks();
    });
  }

  for (let i = 0; i < toggleReadButton.length; i++) {
    toggleReadButton[i].addEventListener("click", () => {
      if (myLibrary[i].isRead === "Read") {
        toggleReadButton[i].style.backgroundColor = toggle_blue;
        myLibrary[i].toggleReadStatus();
      } else {
        toggleReadButton[i].style.backgroundColor = toggle_red;
        myLibrary[i].toggleReadStatus();
      }
    });
  }
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

  // Collects the data from form inputs(ex. title, author, pages) then stores it into variables for later use
  const titleValue = document.querySelector(".title").value;
  const authorValue = document.querySelector(".author").value;
  const pagesValue = document.querySelector(".pages").value;
  // Checks if is-read check box is ticket - short version of if-else block
  let isReadValue = document.querySelector(".is-read").checked;

  modal.close(); // Closes the popup form after hitting submit

  // Runs the function after modal closes
  addBookToLibrary(titleValue, authorValue, pagesValue, isReadValue);
  displayBooks(myLibrary);
});

// DISPLAY
const prepopulatedBooks = [
  [
    "Beyond Good and Evil",
    "Critique of Pure Reason",
    "The Republic",
    "Discourse on Method",
    "The Myth of Sisyphus",
    "Either/Or",
  ],
  [
    "Friedrich Nietzsche",
    "Immanuel Kant",
    "Plato",
    "René Descartes",
    "Albert Camus",
    "Søren Kierkegaard",
  ],
  [240, 856, 416, 86, 212, 640],
  [true, false, false, true, true, false],
];

for (let i = 0; i < prepopulatedBooks[0].length; i++) {
  const title = prepopulatedBooks[0][i];
  const author = prepopulatedBooks[1][i];
  const pages = prepopulatedBooks[2][i];
  const isRead = prepopulatedBooks[3][i];

  addBookToLibrary(title, author, pages, isRead);
}

displayBooks();
