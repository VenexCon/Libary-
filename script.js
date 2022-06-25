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
                pushBooktoLib(tempbook);
                clearCurrentArray()
                displayBook(bookArray)
                return formValues.reset();
            }
        });


// called during the submit eventListener

const pushBooktoLib = (tempbook) => {
    return bookArray.push(tempbook)
    };
// demo book 
    const book1 = new addBook("to kill", "john Doe", "1234", "123");
    pushBooktoLib(book1);

// Called in the submit, hideButton and displayButton El. 
    function clearCurrentArray () {
        const children = Array.from(document.querySelectorAll("bookCard")); 
            return children.forEach(child => bookDisplay.removeChild(child));
    }

//Delete Card Button 
 const deleteSelf=  (e) => { 
        let selection = e.currentTarget.getAttribute("data-index") //data-index assigned in displayBook Func
            for (i=0; i < bookArray.length; i++) {
                if (i == selection){
                    bookArray.splice (i, 1)
                    clearCurrentArray(); 
                    return displayBook(bookArray)
                } else console.log("not found)")
            }
    }




//Card & Buttton Styling 
function displayBook (bookArray){     
        // increments with each new card creation, replace with for loop.
        let i = 0;

        bookArray.forEach(book =>  {

        // main container element for each card.  
        const bookCard = document.createElement("bookCard");
            bookCard.setAttribute("id", "bookCards");

        const deleteBtn = document.createElement("button");
            const deleteWord = document.createTextNode("Delete");
            deleteBtn.setAttribute("id", "deleteBtn");
            deleteBtn.setAttribute("data-index",`${(i++)}`); 


        const readBtn = document.createElement("button");
            const readBtnWord = document.createTextNode("Read");
            readBtn.setAttribute("id", "read-button");

        const checkContainer = document.createElement("Div");
        const label = document.createElement("label")
              label.setAttribute("for", "read")
              label.innerHTML= "Have you read it?"

        const checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox")
            checkbox.setAttribute("id", "read");



        
        
        //Delete Button Styles
        deleteBtn.style.borderRadius = "2px"; 
        deleteBtn.style.backgroundColor = "red";
        deleteBtn.style.color = "white"

        //read Btn Styles 
        readBtn.style.borderRadius = "2px"; 
        readBtn.style.backgroundColor = "red";
        readBtn.style.color = "white"

        //bookcard Styles
        bookCard.style.border = "solid 2px red";
        bookCard.style.marginBottom = "2rem";
        bookCard.innerHTML = `${book.title}, ${book.author}, ${book.year}, ${book.pages}`

        
        deleteBtn.appendChild(deleteWord);
        readBtn.appendChild(readBtnWord);
        checkContainer.appendChild(label);
        checkContainer.appendChild(checkbox);
        bookCard.appendChild(deleteBtn);
        bookCard.appendChild(readBtn);
        bookCard.appendChild(checkContainer);
        bookDisplay.appendChild(bookCard); 


        deleteBtn.addEventListener("click", (e) => {
            deleteSelf(e)
            })


        readBtn.addEventListener("click",(e) => {
            book.isRead(e);
        });
        });

        };




