<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form v-if="!submited">
            <label>Blog Title:</label>
            <input type="text" v-model.lazy="blog.title" required />
            <label>Blog Content:</label>
            <textarea v-model.lazy="blog.content"></textarea>
            <div id="checkboxes">
                <label>Computer</label>
                <input type="checkbox" value="Computer" v-model="blog.categories"/>
                <label>Business</label>
                <input type="checkbox" value="Business" v-model="blog.categories"/>
                <label>Art</label>
                <input type="checkbox" value="Art" v-model="blog.categories"/>
                <label>Physical Therapy</label>
                <input type="checkbox" value="Physical Therapy" v-model="blog.categories"/>
                <label>Programming</label>
                <input type="checkbox" value="Programming" v-model="blog.categories"/>
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
export default {
    data(){
        return{
            blog: {
                title:"",
                content:"",
                categories: []
            },
            submitted: false,
        }
    },

    methods:{
        post: function(){
            this.$http.post("https://jsonplaceholder.typicode.com/posts",{
                title: this.blog.title, 
                body: this.blog.content,
                userID: 1
            }).then(function(data){
                console.log(data);
                this.submited = true;
            });
        }

    }
}
</script>

<style >
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    max-width: 500px;
    margin: 20px auto;
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
    border: 1px dotted #ccc;
    margin: 30px 0;
}
#cat{
    
    color-adjust: black;
    background: white;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}

#checkboxes label{
    display: inline-block;
}
</style>