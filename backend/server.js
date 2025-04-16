import express, { json } from 'express';
import authRoutes from './routes/auth.routes.js'
import movieRoutes from './routes/movie.routes.js'
import tvRoutes from './routes/tv.routes.js'
import searchRoutes from './routes/search.routes.js'
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import cookieParser from 'cookie-parser'
import { protectRoute } from './middleware/protectRoute.js';
import cors from 'cors'
const app = express()
const PORT = ENV_VARS.PORT
// Define allowed origins (can be single or an array of allowed domains)
const corsOptions = {
	origin: `https://${process.env.CODESPACE_NAME}-5173.app.github.dev`, // Replace with your frontend URL
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true, // Allow cookies and credentials to be sent
  };
  
  const codespaceName = process.env.CODESPACE_NAME
  console.log(codespaceName)
app.use(cors(corsOptions));
app.use(express.json()) 
app.use(cookieParser())

app.use("/api/v1/auth" , authRoutes)
app.use("/api/v1/movie" , protectRoute , movieRoutes)
app.use("/api/v1/tv" , protectRoute, tvRoutes);
app.use("/api/v1/search" , protectRoute, searchRoutes);


app.get('/' , (req , res) =>{
    res.send("server is ready for forever")
})

app.listen(PORT, () => {
	console.log("Server started at http://localhost:" + PORT);
	connectDB();
});
