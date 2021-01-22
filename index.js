const booksList = document.querySelector('#books');

const myLibrary = [];

function Book(author, title, pages) {
  this.author = author;
  this.title = title;
  this.pages = pages;
}

function clearField() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}

function addBook(e) {
  e.preventDefault();

  const [title, author, pages] = e.target.elements;
  const book = new Book(author.value, title.value, pages.value);

  const div = document.createElement('div');

  div.innerHTML = `

    <h5 class="card-title mb-0"> ${book.title} </h5>
    <p class="card-text">Author: <span id="author">${book.author}</span></p>
    <p class="card-text">Pages: <span id="pages">${book.pages}</span></p>
    <a class="delete-book" ><i class="fas fa-trash-alt delete"></i></a><br>
    <label class="switch pb-4">
    <input  type="checkbox">
    <span class="slider round"></span>
  </label>

  <br><br>
 `;

  booksList.appendChild(div);

  myLibrary.push([author.value, title.value, pages.value]);

  clearField();
}


function removeBook(e) {
  if (e.target.parentElement.classList.contains('delete-book')) {
    if (window.confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }
}

function loadEventListeners() {
  document.querySelector('#form').addEventListener('submit', addBook);
  booksList.addEventListener('click', removeBook);
}

loadEventListeners();
