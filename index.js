const booksList = document.querySelector('#books')

class Store {
  static getBooks() {
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(pages) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if(book.pages === pages) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem('books', JSON.stringify(books));
  }
}

let myLibrary = Store.getBooks;

function Book(author, title, pages ) {
  this.author = author
  this.title = title
  this.pages = pages
}


function clearField(){
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#pages').value = ''
}


function addBook(e){
    e.preventDefault();  

   const [title, author, pages] = e.target.elements
   const book = new Book(author.value, title.value, pages.value); 
    
    
    // creating list of books
    const li = document.createElement('li')
    li.className = 'book-list';

    li.appendChild(document.createTextNode([author.value, title.value, pages.value]))


    // delete icon
    const link = document.createElement('a')
    link.className = 'delete-book';
    link.innerHTML = '<i class="fas fa-trash-alt delete"></i>'
    
    // add delete icon to li
    li.appendChild(link)


    // add li to the ul
    booksList.appendChild(li)

    //console.log(booksList)

    myLibrary.push(book)

    clearField()
}




document.querySelector('#form').addEventListener('submit', addBook)


