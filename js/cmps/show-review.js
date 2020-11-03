// import './long-text.js';
import {bookService} from '../service/book-service.js'
// import bookReview from './book-review.js'

export default {
    props: ['bookId'],
    template: `
      
        <section v-if="reviews" class="show-reviews">
            
           <div v-for="review in reviews" :key="review.id">

           <h4> Name:{{review.fullName}}</h4>
           <h4> Text:{{review.txt}}</h4>
            </div>
  
        </section>
    `,
    data() {
        return {
           reviews: null
        }
    },
    computed: {
       
    },
    methods: {
       
    },
    components: {
       
    },

    created() {
      
        bookService.getBookById(this.bookId)
        .then(book => this.reviews = book.reviews )
            console.log('book in show',this.reviews);
    }
}