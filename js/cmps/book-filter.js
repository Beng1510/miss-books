

export default {
    template: `
        <section class="book-filter">
            <h2 class="book-filter-title">Filter Those Books</h2>
            <!-- <input type="text" v-model="filterBy.byName" placeholder="Search By " @input="emitFilter" /> -->
           <form class="book-filter-form" @submit.prevent="emitFilter" >

            <!-- <input type="text" v-model="filterBy.byName" placeholder="Search By " />
            <input type="number" v-model.number="filterBy.fromPrice" placeholder="Enter from price"  />
            <input type="number" v-model.number="filterBy.toPrice" placeholder="Enter to price" /> -->
            <input type="text" v-model="filterBy.byName" placeholder="Search By " @input="emitFilter" />
            <input type="number" v-model.number="filterBy.fromPrice" placeholder="Enter from price" @input="emitFilter" />
            <input type="number" v-model.number="filterBy.toPrice" placeholder="Enter to price" @input="emitFilter" />
</form>
            <hr />
          
        </section>
    `,
    data() {
        return {
            filterBy: { byName: '', fromPrice: 0, toPrice: Infinity }
        }
    },
    methods: {
        emitFilter() {
            console.log(this.filterBy);
            // var jsonFilterBy = JSON.parse(JSON.stringify(this.filterBy)) -'wont work with infinity
            // console.log('jsonFilterBy',jsonFilterBy);

            // this.$emit('filtered',jsonFilterBy);

            this.$emit('filtered', this.filterBy);
        }
    }
}