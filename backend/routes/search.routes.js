import express from 'express'
import { searchMovie, searchPerson , searchTv ,getSearchHistory, removeItemFromSearchHistory } from '../controllers/search.controllers.js';
const router = express.Router();

router.get("/person/:query" , searchPerson);
router.get("/movies/:query" , searchMovie);
router.get("/tv/:query" , searchTv)
router.get('/history' , getSearchHistory);

router.delete("/history/:id", removeItemFromSearchHistory);


export default router;