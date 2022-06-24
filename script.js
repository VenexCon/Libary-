// Libary OOP

//consts & lets
let bookArray = []; 
const bookDisplay = document.getElementById("bookcase");
const formValues = document.getElementById("new-book");
const submitBtn = document.getElementById("submit");
const displayBtn = document.getElementById("displayButton");
const hideButton = document.getElementById("hideButton"); 


// This takes the form.values and assigns them as per the constructor Func. 
submitBtn.addEventListener("click", function (e)  {
    e.preventDefault();
    let title = document.getElementById("user-title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let pages = document.getElementById("pages").value;
    let tempbook = new addBook(title, author, year, pages);
        if (title === "" || author === "" || year === ""){
            return console.log("all fields required")
    } else { 
        removeChildren();
        addBookToLibary(tempbook);
        displayBooks(bookArray)
        return formValues.reset();
    }
});

// loops through the book-display Div and removes all children
function removeChildren() {
    let children = Array.from(document.querySelectorAll("#bookCards"));
    children.forEach (child => bookDisplay.removeChild(child));
}


//constructor function 
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


//hide & display status
let displayStatus = true;
//calls the function to destroy all cards in the DOM
    displayBtn.addEventListener("click", () => {
        if (displayStatus===true){
        displayBooks (bookArray)
        return displayStatus === false
        } else ""
    })
        

// calls the function to re-display the cards
        hideButton.addEventListener("click", () => {
            if (displayStatus === false){
            removeChildren();
            return displayStatus === true;
            } else ""
        } )


//iterates and displays books in bookArray.
function displayBooks (bookArray) {
    bookArray.forEach(book => { 

        const bookCard = document.createElement("bookCard");
        const btn = document.createElement("button");
        const btnWord = document.createTextNode("Delete");

        bookCard.setAttribute("id", "bookCards");
        btn.setAttribute("id", "deleteBtn");
        btn.setAttribute("data-num", (bookArray.length-1))

        
        btn.style.borderRadius = "2px"; 
        btn.style.backgroundColor = "red";
        btn.style.color = "white"

        bookCard.setAttribute("data-index", (bookArray.length-1));
        bookCard.style.border = "solid 2px red";
        bookCard.style.marginBottom = "2rem";
        bookCard.innerHTML = `${book.title}, ${book.author}, ${book.year}, ${book.pages}`

        btn.appendChild(btnWord);
        bookCard.appendChild(btn);
        bookDisplay.appendChild(bookCard); 

        btn.addEventListener("click", (e) => {
            console.log(e.target.id)
        })


    });
}

//Example Books 




