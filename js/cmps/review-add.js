import { bookService } from '../service/book-service.js'
// import showReview from './show-review.js';
import { eventBus } from '../service/event-bus-service.js'

export default {
    props:['book'],
    name: 'review-add',
    template: `
        <section class="review-add" @submit.prevent="saveReview">
        <h2>Review</h2>

          <form v-if="!newReview.isShowReviews" class="review-add-form" >
            <input ref="inputName" type="text" placeholder="full name" v-model="newReview.fullName" />

            <select v-model="newReview.rate">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
            </select>

                <input type="date" id="read-on" name="read-on" />
                <input type="text" placeholder="write your review" v-model="newReview.txt" />
                <button>Add</button>
         </form>
              
         <button @click="toggleShowReviews"><h2><span v-if="!newReview.isShowReviews">reviews</span><span v-if="newReview.isShowReviews">add review</span></h2></button>
        
        <div v-if="newReview.isShowReviews" class="reviews">
            <ul>
                <li v-for="review in book.reviews" :key="review.id">
                    <h3>{{review.fullName}}</h3>
                    <h3>Rate: {{review.rate}}</h3>
                    <!-- <span v-for="idx in review.rate" class="fa fa-star checked"></span> -->
                    <!-- <span v-for="idx in 5-review.rate" class="fa fa-star"></span> -->
                    <h3>Read At: {{review.readAt}}</h3>
                    <p>{{review.txt}}</p>
                    <button @click="onRemoveReview(review.id)">x</button>
                </li>
            </ul>
        </div> 

    </section>
    `,
    data() {
        return {
            newReview: bookService.getEmptyReview()
            
            
        }
    },
    methods: {
        saveReview() {
            // const { bookId } = this.$route.params
            // bookService.addReview(bookId, this.newReview)
            bookService.addReview(this.book.id, this.newReview)
            // console.log('this.newReview',this.newReview);
            .then(eventBus.$emit('show-msg-add', { msg: 'Review added successfully', bookId: this.book.id }))
            // .then
        },
        toggleShowReviews() {
            this.newReview.isShowReviews = !this.newReview.isShowReviews;
        },
        onRemoveReview(reviewId) {
            bookService.removeReview(reviewId, this.book.id)
                .then(res => {
                    console.log('res', res);
                    eventBus.$emit('show-msg', 'Review Deleted')
                })
        }
    },
    // components: {
    //     bookService,
    //     eventBus    },
    created() {
       

    },
    mounted() {
        this.$refs.inputName.select();
    }
}
