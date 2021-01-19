const booksList = document.querySelector("#books");

let myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function clearField() {
  document.querySelector("#title").value = "";
  document.querySelector("#author").value = "";
  document.querySelector("#pages").value = "";
}

function addBook(e) {
  e.preventDefault();

  const [title, author, pages] = e.target.elements;
  const book = new Book(author.value, title.value, pages.value);

  const div = document.createElement("div");

  div.innerHTML = `
<div class="row">
<div class="col-md-3">
    <h5 class="card-title mb-0"> ${book.title} </h5>
    <p class="card-text">Author: <span id="author">${book.author}</span></p>
    <p class="card-text">Pages: <span id="pages">${book.pages}</span></p></div></div>
 `;

  // delete icon
  const link = document.createElement("a");
  link.className = "delete-book";
  link.innerHTML = '<i class="fas fa-trash-alt delete"></i>';

  // add delete icon to li
  booksList.appendChild(link);
  booksList.appendChild(div);

  // add li to the ul
  //booksList.appendChild(li)

  //console.log(booksList)

  myLibrary.push([author.value, title.value, pages.value]);

  clearField();
}

function loadEventListeners() {
  document.querySelector("#form").addEventListener("submit", addBook);
  booksList.addEventListener("click", removeBook);
}

function removeBook(e) {
  if (e.target.parentElement.classList.contains("delete-book")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

loadEventListeners();
