
import bookApp from './pages/book-app.js';
import bookDetails from './cmps/book-details.js';
import homePage from './pages/home-page.js'
import aboutUs from './pages/about-us.js'
import reviewAdd from './cmps/review-add.js';
import bookAdd from './cmps/book-add.js';

const myRoutes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutUs
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/review',
        component: reviewAdd
    },
    {
        path: '/book/add',
        component: bookAdd
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })
