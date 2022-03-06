import Router from "express";
import data_movie from '../share/data-movies.js';
import moviesController from '../controllers/moviesController.js';

const router = Router();

router.use((req, res, next) => {
	console.log('moviesRoutres.js');
	next();
});
router.get('/', (req, res) => {
	moviesController.getAllMovies(data_movie)
	res.send(data_movie.res)
})
router.route('/:id')
	.get((req, res) => {
		const id = req.params.id;
		data_movie.req = { id: id };
		moviesController.getMovieById(data_movie)
		res.send(data_movie.res)
	})


	.delete((req, res) => {
		const id = req.params.id;
		data_movie.req = { id: id };
		moviesController.removeMovie(data_movie)
		res.send(data_movie.res)
	})

	.put((req, res) => {
		data_movie.req = req.body
		moviesController.updateMovie(data_movie)
		res.send(data_movie.res)
	});

router.post('/add', (req, res) => {
	data_movie.req = req.body
	moviesController.createMovie(data_movie)
	res.send(data_movie.res)
})
router.post('/addActor', (req, res) => {
	data_movie.req = req.body
	moviesController.addActors(data_movie)
	res.send(data_movie.res)
});
router.get('/:key/:value', (req, res) => {
	const key = req.params.key;
	const value = req.params.value;
	data_movie.req = { key: key, value: value };
	moviesController.getMovieBy(data_movie)
	res.send(data_movie.res)
});

export default router;