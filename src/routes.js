import ClubTemp from './components/ClubTemp.vue'
import Homepage from './components/Homepage.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import AddPost from './components/AddPost.vue'

export default[
    {path: "/", component: Homepage},
    {path: "/club", component: ClubTemp},
    {path: "/login", component: Login},
    {path: "/register", component: Register},
    {path: "/add-post", component: AddPost}
]