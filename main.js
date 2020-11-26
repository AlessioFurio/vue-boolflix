

var app = new Vue({
	el: '#root',

	data: {
		movies: [], // array dei movies
		series: [],
		search: '', // input v-model
		arrayFlags: ['it', 'en'],
		arrayGeneri: [],
		selectedGenre: '',
		arrayGeneriMovie: [],
		arrayGeneriSeries: [],
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
				this.movies.forEach((item, i) => {

						this.arrayGeneriMovie.push(item.genre_ids);
				});
			}); // fine then


					// CHIAMATA X REPERIRE I GENERI DI TUTTI I FILM x la select
			axios
			.get('https://api.themoviedb.org/3/genre/movie/list', {
				params: {
					api_key: '3b8fd41bd03a505fc96b3ca3fb875ed4',
				}
				})
			.then((rispostaGeneri) =>{

				this.arrayGeneri = rispostaGeneri.data.genres; // assegno ad array generi la risposta API
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
				this.series.forEach((item, i) => {

						this.arrayGeneriSeries.push(item.genre_ids);
				});

			}); // fine then

		}// fine searchSeries
	}, // fine methods

	mounted() {

	} // fine mounted
});
