let books=[  { bookname: "The Hunger Games", author: "suzanne collins", publicationYear: 2008 },
{
  bookname: "The Girl with the Dragon Tattoo",
  author: "stieg larsson",
  publicationYear: 2005,
},
{ bookname: "The Help", author: "kathryn stockett", publicationYear: 2009 },
{ bookname: "The Fault in Our Stars", author: "john green", publicationYear: 2012 },
{ bookname: "Gone Girl", author: "gillian flynn", publicationYear: 2012 },
{
  bookname: "The Girl on the Train",
  author: "paula hawkins",
  publicationYear: 2015,
}]
let filterBook=[];
function filtor(){
  for(let i=0;i<books.length;i++){
    let book=books[i];

    if(book.publicationYear>2010){
      book.author=book.author.toUpperCase()
      filterBook.push(book)
    }
  }
}
filtor()
console.log(filterBook)

