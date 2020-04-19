<template>
    <body>
        <messages></messages>
        <div id = posts>
            <h1>Posts</h1>
            <div id = content>
                <h1>User/Club who made post<img src = '../assets/wulogo.jpg' alt="Walsh logo"></h1>
                <p>Computer science club meeting will take place at 6:00 pm tonight in the Lab!<p/>
            </div>
        </div>
    </body>
    
</template>


<script>
import Messages from './Messages.vue'
import firebase from "firebase";



export default {
    components:{
    'messages': Messages, 
  }
};


</script>



<style scoped>

#posts{
    width: 60%;
    background-color: maroon;
    padding: 1%;
    margin-top: 2%;
    margin-left: 1%;
    color: gold;
    padding-top: .2%;
    background-image: linear-gradient(to right, maroon , gold);
    box-shadow: 0 0 40px 0 rgba(72,94,116,0.7);
}

#content {
width: 98%;
height: fit-content;
padding: 10px;
border: 2px groove maroon;
margin-top: 2%;
background-color: gold;
}

#content:hover{
    box-shadow: 0 0 40px 0 rgba(99, 35, 23, 0.7);
}

#content h1{
    border-bottom: 2px groove maroon;
    color: black;
}

#content p{
    color: black;
}

#content img{
    width: 5%;
    float: right;
    border-radius: 50%;
}


</style>