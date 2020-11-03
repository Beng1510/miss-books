// import './pages/book-app.js';
// import './service/book-service.js'
import { myRouter } from './routes.js'
import {bookService} from './service/book-service.js'
// import { eventBus } from './services/event-bus-service.js'

import bookApp from './pages/book-app.js'
import bookHeader from './cmps/book-header.js'
import userMsg from './cmps/user-msg.js'


const options = {
    el: '#app',
    router: myRouter,
    template: `
        <section>
        <book-header></book-header>


        <main>
            <router-view></router-view>
        </main>
        <user-msg />
        <!-- <show-review></show-review> -->
           <!-- <book-app/>           -->
        </section>
    `,
    components: {
        bookService,
        bookApp,
        bookHeader,
        userMsg
    },
    // created() {
    //     eventBus.$on('carDeleted', () => {
    //         console.log('deletedddddd');
    //     })
    // }
   
}

const app = new Vue(options);

