// import './long-text.js';
import { bookService } from '../service/book-service.js'
import reviewAdd from './review-add.js'

export default {
    // props: ['book'],
    template: `
       <section class="book-add">
            <h2> add and search</h2>
            <input @change="onSearchBook" v-model="searchTerm" placeholder="search a book"/>
   
            <ul v-show="googleBooks">
                <li v-for="book in googleBooks"> {{book.title}} 
                    <button @click="addBook(book)">+</button>
                </li>
            </ul>   
        </section>
    `,
    data() {
        return {
            searchTerm: '',
            googleBooks: null,
            titles: null
        }
    },
    computed: {


    },
    methods: {
        onSearchBook() {
            bookService.searchBook(this.searchTerm)
                .then(books => {
                    console.log('books', books);
                    this.googleBooks = books
                    console.log('this.googleBooks', this.googleBooks);
                    return books
                })
                .then(books => {
                    this.titles = books.map(book => {
                        return book.title
                    })
                    console.log('this.titles', this.titles);
                })
        },
        addBook(book) {
            bookService.addGoogleBook(book)
                .then(res => {
                    const idx = this.googleBooks.indexOf(book)
                    this.googleBooks.splice(idx, 1)
                })
        }
    },
    created() {
        console.log('book add created');
        bookService.getGoogleBooks()
            .then(books => {
                this.googleBooks = books
                console.log(this.googleBooks)
                return books
            })
            .then(books => {
                this.titles = books.map(book => {
                    return book.title
                })
            })
    }
}