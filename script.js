// Libary OOP

//consts & lets

let bookArray = []; 


const bookDisplay = document.getElementById("bookcase");
const formValues = document.getElementById("new-book");
const submitBtn = document.getElementById("submit");
const displayBtn = document.getElementById("displayButton");
    displayBtn.addEventListener("click", () => {
        clearCurrentArray();
        displayBook(bookArray)
        });
const hideButton = document.getElementById("hideButton");
    hideButton.addEventListener("click", () => {
        clearCurrentArray ()
    })


//constructor function 
function addBook (title, author, year, pages) {
    this.title = title; 
    this.author = author; 
    this.year = year;
    this.pages = pages;
    };



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
        
        addBookToLibary(tempbook);
        clearCurrentArray()
        displayBook(bookArray)
        return formValues.reset();
    }
});


// pushes new book to current array
function addBookToLibary(tempbook) {
   return bookArray.push(tempbook)
};

//function to remove book by matching array location 
    function clearCurrentArray () {
        const children = Array.from(document.querySelectorAll("bookCard")); 
            console.log(children);
            return children.forEach(child => bookDisplay.removeChild(child));
    }

//refactored to call a single book 
function displayBook (bookArray) {
        bookArray.forEach(book =>  {


        const bookCard = document.createElement("bookCard");
        const btn = document.createElement("button");
        const btnWord = document.createTextNode("Delete");


        bookCard.setAttribute("id", "bookCards");
        btn.setAttribute("id", "deleteBtn");
        btn.setAttribute("data-index","test" )

        
        btn.style.borderRadius = "2px"; 
        btn.style.backgroundColor = "red";
        btn.style.color = "white"


        bookCard.style.border = "solid 2px red";
        bookCard.style.marginBottom = "2rem";
        bookCard.innerHTML = `${book.title}, ${book.author}, ${book.year}, ${book.pages}`

        btn.appendChild(btnWord);
        bookCard.appendChild(btn);
        bookDisplay.appendChild(bookCard); 

        btn.addEventListener("click", (e) => {
           return console.log(e.target.parentNode);
            })


        });

    }
// tommorrow 

// create a counter, assign the delete button a data attribute
// When pressed, the button should slice the array at the index of the button. 



