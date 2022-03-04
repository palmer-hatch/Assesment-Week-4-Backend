const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/books`

const booksCallback = ({ data: books }) => displayBooks(books)
const errCallback = err => console.log(err.response.data)

const getAllBooks = () => axios.get(baseURL).then(booksCallback).catch(errCallback)
const createBook = body => axios.post(baseURL,body).then(booksCallback).catch(errCallback)
// const deleteBook = id => axios.delete(`${baseURL}/${id}`).then(booksCallback).catch(errCallback)
// const updateBook = (id, type) => axios.put(`${baseURL}/${id}`, {type}). then(booksCallback).catch(errCallback)

function submitBook (e){
    e.preventDefault()

    let title = document.querySelector('#title')
    let genre = document.querySelector('#genre')

    let bodyObj = {
        title: title.value,
        genre: genre.value
    }

    createBook(bodyObj)

    title.value = ''
    genre.value = ''


}

form.addEventListener('submit',submitBook)