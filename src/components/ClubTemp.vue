<template>
      <body>
      <div id ="club-temp">
          <input type ="text" v-model="search" placeholder="Search Clubs" />
              <div v-for="club in filteredClubs" v-bind:key="club" class= "single-club">
                  <router-link v-bind:to="'/club/' + club.id"><h2>{{ club.name }}</h2></router-link>  
                  <p>Location: {{club.location}}</p>  
              </div>  
      </div>
      </body>
</template>

<script>
import searchMixins from '../mixins/searchMixins'


export default {
  data(){
    return{
      clubs: [],
      search: ''
    } 
  },

  created(){
    this.$http.get('https://clubhub-9bb7a.firebaseio.com/clubs.json').then(function(data){
        return data.json();
  }).then(function(data){
    var clubsArray = []
    for (let key in data){
      data[key].id = key
      clubsArray.push(data[key]);
    }
    this.clubs = clubsArray;
  })
},
mixins: [searchMixins]

}
</script>

<style scoped>
 *{
  box-sizing: border-box;
} 

#club-temp h2{
  background-color: gold;
  color: maroon;
}




#banner h1{
  padding-top: 2%;
  margin-left: 2%;
}

#banner img{
  height: 37px;
  width: 50px;
  float: right;
  border-radius: 50%;
  margin-right: 1.5%;
}

#clubinfo{
  box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
  padding-bottom: 1%;
  height: fit-content;
  width: 60%;
  margin-bottom: 3%;
  margin-left: 1%;
}

.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 18%;
  margin-right: 1%;
  background-color: gold;
  float: left;
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7);
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
}

#notifications{
  background-color: gold;
  width: 100%;
  padding-top: 0;
}
 
#info{
  margin-left: 2%;
  max-width: 50%;
} 

#show-clubs{
    max-width: 800px;
    margin: 20px auto;
     background: gold;
    border: 3px dotted maroon;
}
.single-club{
    padding: 20px;
    margin: 20px 20px;
    background: gold;
    border: 3px dotted maroon;
}

.single-club h2{
  text-transform: capitalize;
}

router-link{
  text-decoration: none;
}

.single-club:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.7);
}

#show-clubs a{
    color: #444;
    text-decoration: none;
}
input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
}

</style>