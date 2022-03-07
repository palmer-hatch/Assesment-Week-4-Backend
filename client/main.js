const form = document.querySelector('form')
const deleteBtn = document.getElementById('deleteBtn')
const updateBtn = document.getElementById('updateBtn')

const baseURL = `http://localhost:4000/api/books`

const booksCallback = ({ data: books }) => console.log(books)
// displayBooks(books)
const errCallback = err => console.log(err.response.data)

const getAllBooks = () => axios.get(baseURL).then(booksCallback).catch(errCallback)
const createBook = body => axios.post(baseURL,body).then(booksCallback).catch(errCallback)
const deleteBook = id => axios.delete(`${baseURL}/${id}`).then(booksCallback).catch(errCallback)
const updateBook = (id, type) => axios.put(`${baseURL}/${id}`, {type}). then(booksCallback).catch(errCallback)

function submitBook (e){
    e.preventDefault()

    let title = document.getElementById('title')
    let genre = document.getElementById('genre')
    
    let bodyObj = {
        title: title.value,
        genre: genre.value
    }

    createBook(bodyObj)

    title.value = ''
    genre.value = ''


}

form.addEventListener('submit',submitBook)
deleteBtn.addEventListener('click', deleteBook)
updateBtn.addEventListener('click',updateBook)