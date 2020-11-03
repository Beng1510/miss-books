import bookApp from './pages/book-app.js';
import bookDetails from './cmps/book-details.js';
import homePage from './pages/home-page.js'
import aboutUs from './pages/about-us.js'
import reviewAdd from './cmps/review-add.js';

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
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/review',
        component: reviewAdd
    },
]

export const myRouter = new VueRouter({ routes: myRoutes })
