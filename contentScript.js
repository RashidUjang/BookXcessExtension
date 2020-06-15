// document is already available to be called
// TODO: Find out why document is already ready to be called

console.log("The content script triggered");

//Getting the ISBN
function getISBN() 
{
    var isbnParent = document.getElementsByClassName("bookxcess-desc")[0];
    var paragraphTags = isbnParent.getElementsByTagName("p")[1];

    // String being parsed is in the form of Product Code: 9780062391629
    // TODO: Perhaps to obtain the ISBN from the ISBN field instead of Product Code?
    isbn = paragraphTags.innerText.substring(14);
    
    return isbn
}

// Calling the Rating API function
function getRating(isbn)
{
    let URLString = "https://www.goodreads.com/book/review_counts.json?isbns=" + isbn + "&key=hLLFCv0T6Wkb6lXO6olXg";
    console.log(URLString);

    fetch(URLString, {
        
    })
    .then((response) => {
        return response.text();
    })
    .then((myText) => {
        console.log(myText);
    })
}

var isbn = getISBN();
getRating(isbn);

// Creating a new node
var node = document.createElement("p");
var textnode = document.createTextNode(isbn); 
node.appendChild(textnode);

// Get the before node, which is the divider
var beforeNode = document.getElementsByClassName("ssw-clearfix")[0];
console.log(beforeNode);

// Inserting into the parent element
var a = document.getElementById("ssw-avg-rate-profile-html").insertBefore(node, beforeNode)

