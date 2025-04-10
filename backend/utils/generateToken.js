import jwt from 'jsonwebtoken'
import { ENV_VARS } from '../config/envVars.js'

const generateTokenAndSetCookeie = (userId , res) =>{
    const token = jwt.sign({userId} , ENV_VARS.JWT_SECRET , {expiresIn : "15d"})

    res.cookie("jwt-netflix" , token , {
        maxAge : 15 * 24 * 60 * 60 * 1000,
        httpOnly : true,
        sameSite : 'strict',
        secure : ENV_VARS.NODE_ENV !=="development",
    })
}

export default generateTokenAndSetCookeie;