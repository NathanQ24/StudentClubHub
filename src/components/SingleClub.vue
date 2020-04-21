<template>
    <div id="single-club">
        <!-- <h1>This is a test: {{ clubIds }}</h1> -->
        <h1>Club: {{club.name}}</h1>
        <article>Location: {{club.location}}</article>

        <div id="show-blogs">
            <li>
                <div v-for="post in posts" :key="post" class="single-blog"> 
                    <h2>{{ post.title }}</h2>  
                    <p>{{post.body}}</p>  
                </div>
            </li>
        </div>

    </div>

</template>

<script>
import firebase from "firebase";


export default {
    props: ['clubIds'],
    data () {
        return {
            posts: [],
        }
    },

    created(){
        firebase.firestore().collection('posts')
            .get()
            .then((snapshot) => {
                snapshot.docs.forEach(doc => {
                    this.posts.push(doc.data());
                })
            console.log(this.clubIds);
            })
            .catch(function(err) {
                console.log(err)
            })
    },
   
}
</script>

<style>
    #single-club{
        max-width: 960px;
        margin: 0 auto;
        padding: 20px;
        background: gold;
        border: 1px dotted #aaa;
    }
</style>