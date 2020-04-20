<template>
    <div id="single-club">
        <h2> club id = {{id}}</h2>
        <h1>Club: {{club.name}}</h1>
        <article>Location: {{club.location}}</article>
    </div>
</template>

<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            club: {}
        }
    },
    // created() {
    //     this.$http.get('https://clubhub-9bb7a.firebaseio.com/clubs/' + this.id + '.json').then(function(data){
    //         return data.json();
    //     }).then(function(data){
    //         this.club = data
    //     });
    // },
    created() {
        this.id = this.$route.params.id;
    }
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