// const req = require('express/lib/request')
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

    },
    
    deleteBook: (req,res) =>{
        let index = books.findIndex(book => book.id === 1)
        books.splice(index,1)
        res.status(200).send(books)
    },
    
    updateBook: (req,res) =>{
        let{id} = req.params
        let {type} = req.body
        
        let index = books.findIndex(book => +book.id === +id)
        
        if(books[index].book){

            books.replace(index.book, "your moms house")
            res.status(200).send(books)
        }else{
            res.status(400)
        }


       
    }

}