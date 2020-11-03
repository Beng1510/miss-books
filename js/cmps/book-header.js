// import './book-preview.js';


export default {
    // props:['books'],
    template: `
        <section class="book-header">
          
            <nav>
                <h2 class="header-title">Miss Books</h2>
                | <router-link to="/" exact>Home</router-link> |
                <router-link to="/about">About Us</router-link> |
                <router-link to="/book" exact>Book App</router-link> |
            </nav>
        </section>
    `,
    methods: {
        
    },
    components: {
       
    }
}