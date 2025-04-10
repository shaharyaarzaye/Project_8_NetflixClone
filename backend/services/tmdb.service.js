import axios from "axios"
import { ENV_VARS } from "../config/envVars.js";

// const url = 'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';

// fetch(url)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

export const fetchfromTMDB = async (url) =>{
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + ENV_VARS.TMDB_API_KEY
    }
  };
      const response = await axios.get(url, options)

      if(response.status !== 200){
        throw new Error("Failed to fetch data from TMDB" + response.statusText)
      }
      return response.data
}