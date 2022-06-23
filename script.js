// Libary OOP

//consts & lets
let bookArray = []; 

const bookDisplay = document.getElementById("bookcase");

const book1 = new addBook("To Kill a Mockingbird", "John Doe", "2017", "1456");
    const add1 = addBookToLibary(book1);

const book2 = new addBook("A Short Walk through the Hindu Kush", "Eric Newby", "1957", "150");
    const add2 = addBookToLibary(book2);

const book3 = new addBook("7 Powerful Habits of Very Powerful People","Danny Montgomery", "2003");
    const add3 = addBookToLibary(book3);

    console.log(bookArray);

//constructor
function addBook (title, author, year, pages) {
    this.title = title; 
    this.author = author; 
    this.year = year;
    this.pages = pages; 
};

//functions
function addBookToLibary(book) {
   return bookArray.push(book)
};

function displayBooks () {
    bookArray.forEach(book => { 
        const bookCard = document.createElement("bookCard")
        book.style.border = "solid 2px red";
        bookCard.innerHTML = `${book.title}, ${book.author}, ${book.year}, ${book.pages}`
        bookDisplay.appendChild(bookCard); 
    });

}



