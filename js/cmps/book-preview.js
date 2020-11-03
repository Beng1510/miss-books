
export default {
    props:['book'],
    template: `
      
        <section class="book-preview">

            <!-- <book-add></book-add> -->

            <div class="book-title-container">

                <p class="book-title" >{{book.title}}</p>
            </div>

        <img class="book-img" :src="imgUrl" />
        <p class="book-price">{{getCurrency}}</p>

        <!-- <router-link :to='/book/add' exact>Add</router-link> -->
        <router-link :to="'/book/' +book.id " exact>Details</router-link>
        
        </section>
    `,
    computed: {
        // imgUrl() {
        //     return `img/car/${this.car.vendor}.png`
        // },
        // previewClass() {
        //     return {active: this.car.isActive}
        // },
        getCurrency() {
            var price = this.book.listPrice.amount 
            if (this.book.listPrice.currencyCode === 'ILS') return '₪' + price;
            else if (this.book.listPrice.currencyCode === 'EUR') return price + ' €';
            else if (this.book.listPrice.currencyCode === 'USD') return price + ' $'

        },
        imgUrl() {
            return this.book.thumbnail
        }
    }
}