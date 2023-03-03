const {Router} = require("express");
const {favs} = require("../utils/fav");

const favsRouter = Router();

favsRouter.post("/create",(req,res)=>{
    favs.push({...req.body})
    res.status(201).json(favs)
})

favsRouter.get("/get", (req, res)=>{
    return res.json(favs);
})

favsRouter.delete("/delete/:id",(req,res)=>{
  const {id} = req.params;
  favs = favs.filter(pj => pj.id !== Number(id))
  return res.status(200).json({msg:"Deleted", data: favs});
})
module.exports = favsRouter;