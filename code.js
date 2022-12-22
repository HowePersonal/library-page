const libraryHeader = document.getElementsByClassName("library-header");
const libraryInputs = document.getElementsByClassName("library-inputs");
const libraryContent = document.getElementsByClassName("library-content");

const bookList = document.getElementsByClassName("content-books");

const form = document.getElementById("form-input")
const submit = document.getElementById("submit");

function Book(title, author, currentPage) {
    this.title = title;
    this.author = author;
    this.curentPage = currentPage;
}

submit.addEventListener("submit", addBook());

function addBook(event) {
    let formData = new FormData(form)
    event.preventDefault()
}

const books = [];