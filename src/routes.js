import ClubTemp from './components/ClubTemp.vue'
import Homepage from './components/Homepage.vue'
import BlogTemp from './components/BlogTemp.vue'
// import AddBlog from './components/AddBlog.vue'
import AddClub from './components/AddClub.vue'
import Register from './components/Register.vue'
<<<<<<< HEAD
import Login from './components/Login.vue'
import SingleClub from './components/SingleClub.vue'
import AddPost from './components/AddPost.vue'


=======
import AddPost from './components/AddPost.vue'
>>>>>>> 6d4906418b18a6ae76074d82d155a8175b68a699

export default[
    {path: "/", component: Homepage},
    {path: "/club", component: ClubTemp},
    {path: "/blog", component: BlogTemp},
    // {path: "/addBlog", component: AddBlog},
    {path: "/register", component: Register},
<<<<<<< HEAD
    {path: "/addClub", component: AddClub},
    {path: "/login", component: Login},
    {path: "/club/:id", component: SingleClub},
=======
>>>>>>> 6d4906418b18a6ae76074d82d155a8175b68a699
    {path: "/add-post", component: AddPost}
]