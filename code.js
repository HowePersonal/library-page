const libraryHeader = document.getElementsByClassName("library-header");
const libraryInputs = document.getElementsByClassName("library-inputs");
const libraryContent = document.getElementsByClassName("library-content");

const titleList = document.getElementById("title-list");
const authorList = document.getElementById("author-list");
const pageList = document.getElementById("page-list");
const deleteList = document.getElementById("delete-list");

const deleteBook = document.getElementsByClassName("deleteButton");

const form = document.getElementById("form-input");
const submit = document.getElementById("submit");

const books = [];

function Book(title, author, currentPage) {
    this.title = title;
    this.author = author;
    this.curentPage = currentPage;
}

form.addEventListener("submit", function(event) {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let currentPage = document.getElementById("currentPage").value;
    event.preventDefault();
    
    let book = new Book(title, author, currentPage);
    books.push(book);   
    updateList(title, author, currentPage, books.length-1);
    console.log(books)
    form.reset();
    
});

function updateList(title, author, currentPage, bookIndex) {
    let titleItem = document.createElement("li");
    let authorItem = document.createElement("li");
    let pageItem = document.createElement("li");
    let deleteItem = document.createElement("li");
    let deleteButton = document.createElement("button");

    titleItem.innerHTML = "<div>" + title + "</div>"
    authorItem.innerHTML = "<div>" + author + "</div>"
    pageItem.innerHTML = "<div>" + currentPage + "</div>"

    deleteButton.append("Delete")
    deleteButton.classList.add("deleteButton")
    deleteItem.appendChild(deleteButton)

    titleItem.setAttribute("data-index", bookIndex)
    authorItem.setAttribute("data-index", bookIndex)
    pageItem.setAttribute("data-index", bookIndex)
    deleteItem.setAttribute("data-index", bookIndex)
    deleteButton.setAttribute("data-index", bookIndex)

    titleList.appendChild(titleItem)
    authorList.appendChild(authorItem)
    pageList.appendChild(pageItem)
    deleteList.appendChild(deleteItem)
}

deleteList.addEventListener("click", function(e) {
    let itemIndex = e.target.dataset.index
    books.splice(itemIndex, 1)
    document.querySelectorAll("[data-index='"+itemIndex+"']").forEach(e => e.remove())

})
