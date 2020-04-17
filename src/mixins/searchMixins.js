export default {
    computed: {
        filteredClubs: function(){
            return this.clubs.filter((club) => {
                return club.name.match(this.search);
            });
        }
    }
};