// Libary OOP

//consts & lets

let bookArray = []; 

const bookDisplay = document.getElementById("bookcase");
const formValues = document.getElementById("new-book");
const newBook = document.getElementById("new-book");

const hideButton = document.getElementById("hideButton");
        hideButton.addEventListener("click", () => {clearCurrentArray ();})

const displayBtn = document.getElementById("displayButton");
        displayBtn.addEventListener("click", () => {clearCurrentArray();displayBook(bookArray)});


//Called during the submit form. 
function addBook (title, author, year, pages) {
    this.title = title; 
    this.author = author; 
    this.year = year;
    this.pages = pages;
    this.read = "no";

    this.isRead = function read(e){
        console.log(`Has ${this.title} been read? ${this.read}`)
            return this.read = "This book has been read";
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
            return console.log("all fields required")

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
// demo book 
    const book1 = new addBook("to kill", "john Doe", "1234", "123");
    pushBookToLib(book1);

// Called in the submit, hideButton and displayButton El. 
    function clearCurrentArray () {
        const children = Array.from(document.querySelectorAll("bookCard")); 
            return children.forEach(child => bookDisplay.removeChild(child));
    }

//Delete Card Button 
 const deleteSelf = function (e) {
        let selection = e.currentTarget.getAttribute("data-index") //data-index assigned in displayBook Func
            bookArray.splice (selection, 1)
            clearCurrentArray(); 
            displayBook(bookArray)
            return console.log("Book deleted") 
        };
            
    
//Card & Button Styling 
function displayBook (Array){     
        // increments with each new card creation, replace with for loop.
        let i = 0;

        Array.forEach(book =>  {



        // main container element for each card.  
        // Most styles implemented in JS and then classess added.
        const bookCard = document.createElement("bookCard");
            bookCard.classList.add("example-card");

        const titleEle = document.createElement("h3")
            titleEle.classList.add("bookCard-title")
            titleEle.textContent = `${this.title}`;

        const pagesEle = document.createElement("p")
            pages.classList.add("pages-style")
            pages.textContent = `${this.pages}`;

        const authorEle = document.createElement("p")
            author.classList.add ("author-style")
            author.textContent = `${this.author}`;

        const yearEle = document.createElement("p")
            year.classList.add("year-style")
            year.textContent = `${this.year}`;

        const appendButton = document.createElement("div");
            appendButton.classList.add("appendBtn");

        const deleteBtn = document.createElement("button");
            const deleteWord = document.createTextNode("Delete");
            deleteBtn.setAttribute("id", "deleteBtn");
            deleteBtn.setAttribute("data-index",`${(i++)}`);
            deleteBtn.classList.add("button");

        const readBtn = document.createElement("button");
            const readBtnWord = document.createTextNode("Read");
            readBtn.setAttribute("id", "read-button");
            readBtn.classList.add("button")

        //bookCard.innerText = `${book.title}, ${book.author}, ${book.year}, ${book.pages}`;
        
        deleteBtn.appendChild(deleteWord);
        readBtn.appendChild(readBtnWord);
        bookCard.appendChild(titleEle);
        bookCard.appendChild(authorEle);
        bookCard.appendChild(yearEle);
        bookCard.appendChild(pagesEle);
        bookCard.appendChild(deleteBtn);
        bookCard.appendChild(readBtn);

        bookDisplay.appendChild(bookCard); 


        deleteBtn.addEventListener("click", (e) => {
            deleteSelf(e)
            })


        readBtn.addEventListener("click",(e) => {
            book.isRead(e);
        });
        });

        };




