
export default {
    template: `
    <section class="home-page ">

        <h1 class="home-page-title">Miss Books</h1>
<!-- <img src="../img/lady-book-3.png"/> -->
            <section class="home-page-container flex"> 
                
            <div class="home-page-img-container flex column">        
                    <img class="home-page-img" src="../img/book-shelf2.jpeg">
                </div>

                <div class="home-page-text-container flex column">
                    <h2>As the ultimate destination for book lovers,<br>
                        Miss Books offers an incredible array of literature,<br>
                        from adventure to poetry,<br>
                        science-fiction, photography and much more...
                    </h2>
                </div>

            </section>

    </section>
    `,
    methods: {
        showRef() {
            console.log(this.$refs, 'ze2');
        }
    },
    // mounted() {
    //     console.log(this.$refs.theTitle, 'IN MOUNTED');
    // },
    created() {
        console.log('home page created');
    },

}