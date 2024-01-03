const getTheTitles = function(books) {
    let green = 0;
    return books.map((book) => book.title);
};

let items = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }]

console.log(items[0].title)
console.log(getTheTitles(items))
// Do not edit below this line
module.exports = getTheTitles;
