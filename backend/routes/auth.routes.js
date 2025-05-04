import express from 'express'
const router = express.Router();
import {signup , login , logout, authCheck} from '../controllers/auth.controllers.js'
import {protectRoute} from "../middleware/protectRoute.js"
router.post("/signup" , signup )
router.post('/login' , login)
router.post("/logout" , logout)

router.get("/authCheck" , protectRoute , authCheck)
export default router;