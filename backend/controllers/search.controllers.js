import { fetchfromTMDB } from "../services/tmdb.service";

export async function searchPerson(req , res){
//  'https://api.themoviedb.org/3/search/person?include_adult=false&language=en-US&page=1'

    const {query} = req.params;
    try{
        const response = await fetchfromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}include_adult=false&language=en-US&page=1`);

        if(response.result.length === 0){
            return res.status(404).send(null);
        }
        res.status(200).json({success: true , content : response.result})

    }catch(error){
        console.log("Error in searchPerson controller" , error.message)
        res.status(500).json({success:false, message: "Internal server error"})
    }

}

export async function searchMovie(req , res){

}

export async function searchTv(req , res){

}