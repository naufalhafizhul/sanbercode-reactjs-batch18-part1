var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

books.forEach(element => readBooksPromise(10000, element, (resolveFn) => {
    console.log(rejectFn)
  }))