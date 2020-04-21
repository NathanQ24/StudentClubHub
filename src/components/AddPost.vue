<template>
    <div>
    
    <div v-if="submitted == true">
            <h3>Thanks for adding a post</h3>
    </div>

    <div id="add-post" v-else-if="!submitted">
        <h2>Add a New Blog Post</h2>
        <form @submit.prevent="formPost" >
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            
            <button v-on:click.prevent="post">Publish Post</button>

        </form> 
        
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p>{{ blog.content }}</p>
        </div>
    </div>
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
  data() {
    return {
        blog: {
                title:"",
                content:"",
                categories: []
            },
        submitted: false,
        posts: [],
    };
  },
  mounted(){
      firebase.firestore().collection('interests')
      .get()
      .then(snap => {
          const interests = [];
          snap.forEach(doc => {
              interests.push({ [doc.id]: doc.data() });
          });
          this.interests = interests;
      });
  },
  methods: {
      post(){
            firebase.firestore().collection('posts').add(
                {
                    createdOn: new Date(),
                    title: this.blog.title, 
                    body: this.blog.content,
                    userID: firebase.auth().currentUser.uid,
                    clubID: 'JTaG1nwed2gqKNrtEjCw',

                })
            .then(() => {
                this.submitted=!this.submitted;
            })
      }
  },

  created() {
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

<style >
#add-post *{
    box-sizing: border-box;
}
#add-post{
    max-width: 500px;
    margin: 20px auto;
    background: maroon;
    padding: 3%;
}

#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: maroon;
    color: black;
    line-height:1.6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"],textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 2px outset maroon;
    margin: 30px 0;
    background: gold;
}
#cat{
    
    color-adjust: black;
    background: white;
}
h3{
    margin-top: 10px;
}
h2{
  color: gold;
}
label{
  color: gold;
}
#selectbox{
    color: black; 
}
</style>
