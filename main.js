

var app = new Vue({
	el: '#root',

	data: {
		movies: [], // array dei movies
		series: [],
		search: '', // input v-model
		stars: [1,2,3,4,5], // array x stampare stelle
	},

	methods: {

		searchFilm(){ // funzione cerca film
			axios
			.get('https://api.themoviedb.org/3/search/movie', {
				params: {
					api_key: '3b8fd41bd03a505fc96b3ca3fb875ed4',
					query: this.search // assegno come query il valore dell' input utente nel v model
				}
				})
			.then((risposta) =>{

				this.movies = risposta.data.results; // assegno ad array movies la risposta API

				console.log(this.movies);
			}); // fine then
		}, // fine searcFilm

		searchSeries(){ // funzione cerca series

			axios
			.get('https://api.themoviedb.org/3/search/tv', {
				params: {
					api_key: '3b8fd41bd03a505fc96b3ca3fb875ed4',
					query: this.search
				}
				})
			.then((risposta2) =>{

				this.series = risposta2.data.results; // assegno ad array series la risposta API

				console.log(this.series);
			}); // fine then

		}// fine searchSeries
	}, // fine methods

	mounted() {

	} // fine mounted
});
