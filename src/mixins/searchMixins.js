export default {
    computed: {
        filteredClubs: function(){
            return this.clubs.filter((club) => {
                return club.name.match(this.search);
            });
        },
        filteredPosts: function(){
            return this.posts.filter((post) => {
                return post.clubID.match("JTaG1nwed2gqKNrtEjCw");
            });
        },
    }
};