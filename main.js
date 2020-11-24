

var app = new Vue({
	el: '#root',

	data: {
		movies: [], // array dei movies
		search: '', // input v-model
		stars: [1,2,3,4,5],
		imgFlags: [
			"ita.jpg",
			"en.jpg"
		],
	},

	methods: {

		searchFilm(){
			axios
			.get('https://api.themoviedb.org/3/search/movie', {
				params: {
					api_key: '3b8fd41bd03a505fc96b3ca3fb875ed4',
					query: this.search
				}
				})
			.then((risposta) =>{

				this.movies = risposta.data.results; // assegno ad array movies la risposta API

				console.log(this.movies);



			}); // fine then
		} // fine searcFilm

	}, // fine methods

	mounted() {

	} // fine mounted
});
