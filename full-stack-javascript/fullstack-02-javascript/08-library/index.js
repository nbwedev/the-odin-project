let myLibrary = [];

const booksContainer = document.querySelector(".books"); // container for book cards
const newBookButton = document.querySelector(".add_book"); // opens pop-up new book form
const modal = document.querySelector("dialog"); // the pop-up
const closeModalButton = document.querySelector("dialog .dialog_close"); // close button inside pop up form
const form = document.querySelector("form"); // form input that contains book details

// // Book actions inside main
// const toggleReadButtons = document.querySelectorAll(".book_toggle-read");
// const removeBookButtons = document.querySelectorAll(".book_remove-btn");

// Creates book with shared methods and properties
function Book(title, author, pages, isRead, id) {
  this.id = id; // Generate a unique id for each book
  this.title = title;
  this.author = author;
  this.pages = pages;

  if (isRead) {
    this.isRead = "Read";
  } else {
    this.isRead = "Not Read";
  }
}

Book.prototype.toggleReadStatus = function () {
  if (this.isRead === "Read") {
    this.isRead = "Not Read";
  } else {
    this.isRead = "Read";
  }
};

// Take params, create a book then store it in the array
function addBookToLibrary(title, author, pages, isRead) {
  const id = self.crypto.randomUUID();
  const book = new Book(title, author, pages, isRead, id);
  myLibrary.push(book);
  return book;
}

// Display book
function displayBooks() {
  booksContainer.innerHTML = "";
  const COLOR_GREEN = "#28388f";
  const COLOR_RED = "#ff6962";

  for (const book of myLibrary) {
    const bookElement = document.createElement("div");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    const isRead = document.createElement("p");
    const removeBookButton = document.createElement("button");
    const toggleReadButton = document.createElement("button");

    bookElement.classList.add("book");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    isRead.classList.add("is-read");
    removeBookButton.classList.add("book_remove-btn");
    toggleReadButton.classList.add("book_toggle-read");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = "A " + book.pages + " page book by";
    isRead.textContent = book.isRead;
    removeBookButton.textContent = "×";
    bookElement.setAttribute("id", book.id);

    if (book.isRead === "Read") {
      toggleReadButton.style.backgroundColor = COLOR_GREEN;
    } else {
      toggleReadButton.style.backgroundColor = COLOR_RED;
    }

    bookElement.appendChild(toggleReadButton);
    bookElement.appendChild(removeBookButton);
    bookElement.appendChild(title);
    bookElement.appendChild(pages);
    bookElement.appendChild(author);

    booksContainer.appendChild(bookElement);
  }

  // now re-bind listeners with the corrected class names
  const removeBookButtons = document.querySelectorAll(".book_remove-btn");
  const toggleReadButtons = document.querySelectorAll(".book_toggle-read");

  removeBookButtons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const parentID = event.target.parentNode.id;
      myLibrary = myLibrary.filter((book) => book.id !== parentID);
      displayBooks();
    });
  });

  toggleReadButtons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      myLibrary[i].toggleReadStatus();
      displayBooks();
    });
  });
}

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

// Pre-populated books

//  TO DO: fix book name overflow in container
const prepopulatedBooks = [
  [
    "The Will to Power",
    "Beyond Good and Evil",
    "Critique of Pure Reason",
    "Either/Or",
    "Discourse on Method",
    "The Republic",
  ],
  [
    "Friedrich Nietzche",
    "Friedrich Nietzche",
    "Immanuel Kant",
    "Søren Kierkegaard",
    "René Descartes",
    "Plato",
  ],
  [600, 352, 856, 640, 128, 416],
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
