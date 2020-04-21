import ClubTemp from './components/ClubTemp.vue'
import Homepage from './components/Homepage.vue'
import BlogTemp from './components/BlogTemp.vue'
import AddClub from './components/AddClub.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import SingleClub from './components/SingleClub.vue'
import AddPost from './components/AddPost.vue'



export default [{
        path: "/",
        component: Homepage
    },
    {
        path: "/club",
        component: ClubTemp
    },
    {
        path: "/blog",
        component: BlogTemp
    },
    // {path: "/addBlog", component: AddBlog},
    {
        path: "/register",
        component: Register
    },
    {
        path: "/addClub",
        component: AddClub
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/club/:id",
        component: SingleClub
    },
    {
        path: "/add-post",
        component: AddPost
    }
]