const res = require('express/lib/response')
const books = require('./db.json')
let globalId = 4


module.exports ={
    getBooks: (req,res) =>{
        res.status(200).send(books)
    },
    
    createBook: (req,res) =>{
        let newBook = req.body
        newBook.id = globalId
        books.push(newBook)
        
        res.status(200).send(books)

        globalId++

    }
    // updateBook:
    // DeleteBook:

}