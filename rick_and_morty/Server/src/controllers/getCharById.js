const axios = require('axios');
const URL="https://rickandmortyapi.com/api/character/";
function getCharById(req,res) {
    const {id}=req.params;
  axios(URL+id)
  .then(({data})=>{
    if (data.error) {
        return res.status(404).send("Not Found");
    }
    const {id, status, name, species, origin, image, gender}=data;
    const character = {
        id, status, name, species, origin, image, gender
    };
    return res.status(200).json(character);
  }).catch((error)=>res.status(500).send(error.message));
}

module.exports={
    getCharById,
    
} 
