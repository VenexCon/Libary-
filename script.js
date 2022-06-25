// Libary OOP

//consts & lets

let bookArray = []; 


const bookDisplay = document.getElementById("bookcase");
const formValues = document.getElementById("new-book");
const submitBtn = document.getElementById("submit");


// if statement was being a pain, cheeky delete & recreate
const displayBtn = document.getElementById("displayButton");
    displayBtn.addEventListener("click", () => {
        clearCurrentArray();
        displayBook(bookArray)
        });


const hideButton = document.getElementById("hideButton");
    hideButton.addEventListener("click", () => {
        clearCurrentArray ();
    })


//Called during the submit form. 
function addBook (title, author, year, pages) {
    this.title = title; 
    this.author = author; 
    this.year = year;
    this.pages = pages;
    };


// preventing form submission through PD, values provided by form 
submitBtn.addEventListener("click", function (e)  {
    e.preventDefault(e);
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

// called during the submit eventListener
function addBookToLibary(tempbook) {
   return bookArray.push(tempbook)
};


// Called in the submit, hideButton and displayButton El. 
    function clearCurrentArray () {
        const children = Array.from(document.querySelectorAll("bookCard")); 
            return children.forEach(child => bookDisplay.removeChild(child));
    }

//Delete Card Button 
    function deleteSelf (e) { 
        let selection = e.currentTarget.getAttribute("data-index")
        for (i=0; i < bookArray.length; i++) {
            if (i == selection){
                bookArray.splice (i, 1);
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

        const bookCard = document.createElement("bookCard");
        const btn = document.createElement("button");
        const btnWord = document.createTextNode("Delete");


        bookCard.setAttribute("id", "bookCards");
        btn.setAttribute("id", "deleteBtn");
        btn.setAttribute("data-index",`${i}`);
        // "i" is set to relate to the index position of the created element in the array.
        i++; 
        
        
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
            deleteSelf(e)
            })

        });

    }



