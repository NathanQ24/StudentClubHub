<template>
<body>
  <div id="club-temp">
    <input type="text" v-model="search" v-show="!selected" placeholder="Search Clubs" />
    <div v-for="club in filteredClubs" v-bind:key="club">
      <div v-show="!selected" class="single-club">
        <a v-on:click="select(club.name)">
          <h2>{{ club.name }}</h2>
        </a>
        <p>Location: {{club.location}}</p>
      </div>
    </div>
    <div v-show="selected">
      <div id="single-club">
        <article v-on:click="back()">Back to Clubs</article>
        <h1 id="clubName">club</h1>
        <article id="clubAddress">address</article>
        <article id="clubLocation">location</article>
        <article id="clubDayTime">daytime</article>
        <article id="clubBio">bio</article>

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

        <button @click.once="filt">View this Clubs Posts</button>
        <li>
                <div v-for="post in postsF" :key="post" class="single-blog">
                    <h2>{{ post.title }}</h2>  
                    <p>{{post.body}}</p>  
                </div>
            </li>
      </div>
    </div>
  </div>
</body>
</template>

<script>
import firebase from "firebase";
import searchMixins from "../mixins/searchMixins";
export default {
  data() {
    return {
      clubs: [],
      clubIds: [],
      search: "",
      selected: false,
      selectedId: "",
      posts: [],
      postsF: [],
      blog: {
                title:"",
                content:"",
                categories: []
            },
        submitted: false,
    };
  },
  created() {
    firebase
      .firestore()
      .collection("clubs")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.clubs.push(doc.data());
          this.clubIds.push(doc.id);
        });
      })
      .catch(function(err) {
        console.log(err);
      });
    
  },
  methods: {
    back: function() {
      this.selected = false;
      this.submitted = false;
      this.postsF = [];
    },
    select: function(name) {
      var ctr = 0;
      this.clubs.forEach(club => {
        if (club.name === name) {
          this.selected = true;
          document.getElementById("clubName").innerHTML = "" + club.name;
          document.getElementById("clubAddress").innerHTML =
            "Address: " + club.address;
          document.getElementById("clubLocation").innerHTML =
            "" + club.location;
          document.getElementById("clubDayTime").innerHTML =
            "Mettings " + club.days + " @ " + club.time;
          document.getElementById("clubBio").innerHTML = "Bio: " + club.bio;
          return;
        }
        if (this.selected == true) {
          return;
        } else {
          ctr = ctr + 1;
        }
      });

      // selectedId now holds key for club doc
      this.selectedId = this.clubIds[ctr];
    },
    filt() {
      this.posts.forEach(post => {
        if (post.clubID === this.selectedId) {
          this.postsF.push(post);
        }
       
      });
    },
    post(){
            firebase.firestore().collection('posts').add(
                {
                    createdOn: new Date(),
                    title: this.blog.title, 
                    body: this.blog.content,
                    userID: firebase.auth().currentUser.uid,
                    clubID: this.selectedId,

                })
            .then(() => {
                this.submitted=!this.submitted;
                this.blog = [];
            })
      },

  },
  mixins: [searchMixins],

mounted() {
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

};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
#single-club {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: gold;
  border: 1px dotted #aaa;
}
#club-temp h2 {
  background-color: gold;
  color: maroon;
}
#banner h1 {
  padding-top: 2%;
  margin-left: 2%;
}
#banner img {
  height: 37px;
  width: 50px;
  float: right;
  border-radius: 50%;
  margin-right: 1.5%;
}
#clubinfo {
  box-shadow: 0 0 20px 0 rgba(72, 94, 116, 0.7);
  padding-bottom: 1%;
  height: fit-content;
  width: 60%;
  margin-bottom: 3%;
  margin-left: 1%;
}
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 18%;
  margin-right: 1%;
  background-color: gold;
  float: left;
}
/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.7);
}
/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}
#notifications {
  background-color: gold;
  width: 100%;
  padding-top: 0;
}
#info {
  margin-left: 2%;
  max-width: 50%;
}
#show-clubs {
  max-width: 800px;
  margin: 20px auto;
  background: gold;
  border: 3px ridge maroon;
}
.single-club {
  padding: 20px;
  margin: 20px 20px;
  background: gold;
  border: 3px ridge maroon;
}
.single-club h2 {
  text-transform: capitalize;
}
router-link {
  text-decoration: none;
}
.single-club:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.7);
}
#show-clubs a {
  color: #444;
  text-decoration: none;
}
input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}
</style>