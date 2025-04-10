import express from 'express'
import { getTrendingmovie , getMovieTrailer , getMovieDetails , getSimilarMovies } from '../controllers/movie.controllers.js';
const router = express.Router();

router.get("/trending" , getTrendingmovie)
router.get("/:id/trailers" , getMovieTrailer )
router.get("/:id/details" , getMovieDetails )
router.get("/:id/similar" , getSimilarMovies )


export default router 