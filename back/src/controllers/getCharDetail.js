// const axios = require ('axios');
// const getCharDetail = (res, id) =>{
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(response => response.data)
//     .then(data => {
//         let char = {
//             name: data.name,
//             image:data.image,
//             gender:data.gender,
//             status: data.status,
//             origin: data.origin.name,
//             species:data.species
//         }
//         res.writeHead(200,{"Content-type": "aplication/json"})
//         .end(JSON.stringify(char))
//     })
//     .catch(err => res.writeHead(500,{"Content-type": "text/plain"})
//     .end(`El Personaje con id: ${id} no fue encontrado`)
//     )
// }

// module.exports= getCharDetail;

const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const { detailId } = req.params;
  axios(URL + detailId).then((response) => {
    let char = {
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      status: response.data.status,
      origin: response.data.origin.name,
      species: response.data.species,
    };
    return res.status(200).json(char);
  })
  .catch(error =>{
    res.status(500).send(error.message);
  });
};

module.exports = {getCharDetail};
