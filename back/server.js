// const http = require("http");
// const characters = require("./src/utils/data");
// const data = require("./src/utils/data");

// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*'); //esto nos permite conectar el back con el front
//     if(req.url.includes("rickandmorty/character")){
//         let id = req.url.split("/").at(-1);
//         let characterFilter = characters.find(char => char.id ===Number(id))

//         res.writeHead(200, {"Content-type": "aplication/json"});
//         res.end(JSON.stringify(characterFilter));
//     }
// }).listen(3001,"localhost");

//--------------------------------------------------------------------------------------------------------------
// const http = require("http");
// const getCharById = require ("./src/controllers/getCharById.js");
// const getCharDetail = require("./src/controllers/getCharDetail.js");
// http.createServer((req,res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*'); //esto nos permite conectar el back con el front
//     let id = req.url.split("/").at(-1);
//     if(req.url.includes("onsearch")){
//         getCharById(res,id)
//     }

//     if(req.url.includes("detail")){
//         getCharDetail(res,id)
//     }
// }).listen(3001,"localhost");
//----------------------------------------------------------------------------------------------------------------

const express = require("express");
const router = require("./src/routes/index");
const favsRouter = require("./src/routes/favorites");
const server = express();
const PORT = 3001;
const cors = require("cors");


server.use(express.json());
server.use(cors());
server.use("/rickandmorty",router);
server.use("/favs",favsRouter);

server.listen(PORT, ()=>{
    console.log('Server raised in port' + PORT);
})