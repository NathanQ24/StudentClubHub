<template>
    <div id="add-post">
        <h2>Add a New Blog Post</h2>
        <form> 
             <!-- v-if="!submited"> -->
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="selectbox">
                <select v-model.lazy="blog.categories">
                    <option disabled value="">Choose Interest </option>
                    <option v-for="interest in interests" :key="interest.title">{{interest.title}} </option>
                <!-- v-for= "interest in interests" :key="interest.interestID"
                <label>{{interest.title}}</label>
                <input type="checkbox" value="interest.title" v-model="blog.categories"/> -->
                </select>
                
            </div>
            <button v-on:click.prevent="post">Add Blog</button>

        </form> 
        <div v-if="submitted">
            <h3>Thanks for adding a post</h3>
        </div>    

        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{ blog.title }}</p>
            <p>Blog content:</p>
            <p>{{ blog.content }}</p>
            <p>Blog Categories</p>
            <ul id="cat">
                <li v-for="category in blog.categories" :key="category"><p>{{ category }}</p></li>
            </ul>


        </div>

    </div>
</template>

<script>
import firebase from "firebase";
export default {
  data() {
    return {
        interests: [],
        blog: {
                title:"",
                content:"",
                categories: []
            },
            submitted: false,
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
      post: function(){
            firebase.firestore().collection('posts').add(
                {
                    title: this.blog.title, 
                    body: this.blog.content,
                    categories: this.blog.categories,
                    userID: firebase.auth().currentUser
                })
      }
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