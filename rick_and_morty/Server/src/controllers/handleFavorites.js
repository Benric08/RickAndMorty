let myFavorites =[];


const postFav = (req,res) => {
 const character = req.body;
 myFavorites.push(character);
 return res.json(myFavorites);

}
const deleteFav = (req,res) => {
 const id = req.params;
 const newMyFavorites = myFavorites.filter((fav)=>fav.id!==+id);
 return res.json(newMyFavorites)
}

module.exports={
    postFav,
    deleteFav
}
