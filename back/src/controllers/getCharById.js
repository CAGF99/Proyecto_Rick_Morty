// const axios = require("axios");
// const getCharById = (res,id) => {
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         let char = {
//             id: data.id,
//             name: data.name,
//             image:data.image,
//             gender:data.gender,
//             species:data.species
//         }
//         res.writeHead(200,{"Content-type":"aplication/json"})
//         .end(JSON.stringify(char))
//     })
//     .catch(err => res.writeHead(500,{"Content-type": "text/plain"})
//     .end(`El Personaje con id: ${id} no fue encontrado`)
//     )
// }

// module.exports= getCharById;

//CON EXPRESS
const URL= "https://rickandmortyapi.com/api/character/";
const axios = require("axios");

const getCharById = (req,res) =>{
    const {id} = req.params; // {id:12}
    
    axios.get(URL+id).then(response =>{
        const character ={
            id: response.data.id,
            name: response.data.name,
            species: response.data.species,
            image: response.data.image,
            gender: response.data.gender
        };
        res.status(200).json(character);
    })
    .catch(error =>{
        res.status(500).send(error.message);
      });
    
    
}

module.exports = {getCharById};