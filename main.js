const app = new Vue({
    el: '#app',
    data: {
        albums: [],
    },
    created() {
        axios.get('http://localhost:80/php-ajax-dischi/api.php')
        .then((response) => {
            this.albums = response.data;
        })
        .catch((error) => {
            console.log(error);
        });
    },
});