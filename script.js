// Libary OOP

//consts & lets

let bookArray = []; 

const bookDisplay = document.getElementById("bookcase");
const formValues = document.getElementById("new-book");
const newBook = document.getElementById("new-book");

const hideButton = document.getElementById("hideButton");
        hideButton.addEventListener("click", () => {hideArray()});

const displayBtn = document.getElementById("displayButton");
        displayBtn.addEventListener("click", () => {showArray()});


//Called during the submit form. 
function addBook (title, author, year, pages) {
    this.title = title; 
    this.author = author; 
    this.year = year;
    this.pages = pages;
    this.readStatus = false;


    this.read = function (e) {
       if (e.target.checked && this.readstatus === undefined || false) {
        console.log ("status set to true")
        return this.readStatus = true;
         } else return this.readStatus = false;
        };
  
    this.delete = function (e) {
      let index = bookArray.findIndex(book => book.title === this.title);
      bookArray.splice(index, 1);
      target = e.target.parentNode; 
        return target.parentNode.removeChild(target);
        };
    };

// preventing form submission through PD, values provided by form 
newBook.addEventListener("submit", function (e) {

    e.preventDefault(e);

    let title = document.getElementById("user-title").value;
    let author = document.getElementById("author").value;
    let year = document.getElementById("year").value;
    let pages = document.getElementById("pages").value;
    let tempbook = new addBook(title, author, pages, year);

       if (title === "" || author === "" || year === ""){
            return alert(`Please complete all form fields`);

            } else {
                pushBookToLib(tempbook);
                clearCurrentArray()
                displayBook(bookArray)
                return formValues.reset();
            }
        });


// called during the submit eventListener
const pushBookToLib = (book) => {
    return bookArray.push(book)
    };
// demo books
    const book1 = new addBook("to kill", "john Doe", "1234", "123");
    pushBookToLib(book1);
    
      const book2 = new addBook("to rob", "john Row", "1234", "123");
    pushBookToLib(book2);



//called in the pushToLib function  
    function clearCurrentArray () {
        const children = Array.from(document.querySelectorAll("bookCard")); 
            return children.forEach(child => bookDisplay.removeChild(child));
    };

    function hideArray () {
        const children = Array.from(document.querySelectorAll("bookCard"));
            return children.forEach(child => child.style.visibility = "hidden");
    }

    function showArray () {
        const children = Array.from(document.querySelectorAll("bookCard"));
            return children.forEach(child => child.style.visibility = "visible")
    }



//Card & Button Styling 
function displayBook (array){     
        // increments with each new card creation, replace with for loop.

        array.forEach(book =>  {

        // main container element for each card.  
        // Most styles implemented in JS and then classess added.
        const bookCard = document.createElement("bookCard");
            bookCard.classList.add("example-card");

        const titleEle = document.createElement("h3")
            titleEle.classList.add("bookCard-title")
            titleEle.textContent = `Title: ${book.title}`;

        const pagesEle = document.createElement("p")
            pagesEle.classList.add("pages-style")
            pagesEle.textContent = `Pages: ${book.pages}`;

        const authorEle = document.createElement("p")
            authorEle.classList.add ("author-style")
            authorEle.textContent = `Author: ${book.author}`;

        const yearEle = document.createElement("p")
            yearEle.classList.add("year-style")
            yearEle.textContent = `Year: ${book.year}`;

        const appendButton = document.createElement("div");
            appendButton.classList.add("appendBtn");

        const deleteBtn = document.createElement("button");
            const deleteWord = document.createTextNode("Delete");
           deleteBtn.setAttribute("id", "deleteBtn");
            deleteBtn.classList.add("button");

        const appendBtn = document.createElement("div"); 
                appendBtn.classList.add("append-box");
                appendBtn.textContent = `Read `;

        const readBox = document.createElement("input");
            readBox.setAttribute("type", "checkbox")
            readBox.setAttribute("id", "read-button");
            if (book.readStatus === true) {
                readBox.checked = true;
            } else readBox.checked = false;

        //bookCard.innerText = `${book.title}, ${book.author}, ${book.year}, ${book.pages}`;
        
        deleteBtn.appendChild(deleteWord);
        appendBtn.appendChild(readBox);
        bookCard.appendChild(titleEle);
        bookCard.appendChild(authorEle);
        bookCard.appendChild(yearEle);
        bookCard.appendChild(pagesEle);
        bookCard.appendChild(appendBtn);
        bookCard.appendChild(deleteBtn);
        bookDisplay.appendChild(bookCard); 


        deleteBtn.addEventListener("click", (e) => {
            book.delete(e)
            })


        readBox.addEventListener("change",(e) => {
            console.log("checked");
            book.read(e);
        });
        }
        )};


window.onload = function () {displayBook(bookArray)}