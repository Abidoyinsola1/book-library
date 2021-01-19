const booksList = document.querySelector('#books')

let myLibrary = [];

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

    myLibrary.push([author.value, title.value, pages.value])

    clearField()
}



function loadEventListeners() {
  document.querySelector('#form').addEventListener('submit', addBook)
  booksList.addEventListener('click', removeBook);
  
}


function removeBook(e) {
  if(e.target.parentElement.classList.contains('delete-book')) {
    if(confirm('Are You Sure?')) {
      e.target.parentElement.parentElement.remove();

    }
  }
}


loadEventListeners();

