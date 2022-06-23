// Libary OOP

//consts & lets
let bookArray = []; 
const bookDisplay = document.getElementById("bookcase");
const formValues = document.getElementById("new-book");
const displayBtn = document.getElementById("displayButton");
const submitBtn = document.getElementById("submit");

let displayStatus = true; 



submitBtn.addEventListener("click", function (e)  {
    e.preventDefault();
    let title = document.getElementById("user-title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let pages = document.getElementById("pages").value;
    let tempbook = new addBook(title, author, year, pages);
        if (title === "" || author === "" || year === ""){
            return console.log("undefined")
    } else { 
        removeChildren();
        addBookToLibary(tempbook);
        displayBooks(bookArray)
        return formValues.reset();
    }
});

function removeChildren() {
    let children = Array.from(document.querySelectorAll("#bookCards"));
    children.forEach (child => bookDisplay.removeChild(child));
}


//constructor
function addBook (title, author, year, pages) {
    this.title = title; 
    this.author = author; 
    this.year = year;
    this.pages = pages; 

};


// pushes new book to current array
function addBookToLibary(book) {
   return bookArray.push(book)
};


//iterates and displays books in bookArray.
function displayBooks (bookArray) {
    bookArray.forEach(book => { 
        const bookCard = document.createElement("bookCard");
        bookCard.setAttribute("id", "bookCards")
        bookCard.style.border = "solid 2px red";
        bookCard.style.marginBottom = "2rem";
        bookCard.innerHTML = `${book.title}, ${book.author}, ${book.year}, ${book.pages}`
        bookDisplay.appendChild(bookCard); 
    });

}




