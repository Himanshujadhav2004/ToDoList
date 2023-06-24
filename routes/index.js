const { render } = require("ejs");

const router=require("express").Router()
const Todo=require("../models/todo")

router.get("/",async(req,res)=>{
 const allTodo=await Todo.find()
res.render("index.ejs",{todo:allTodo})
})

module.exports=router;
