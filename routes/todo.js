const router =require('express').Router()
//routes
const Todo=require("../models/todo")

router.post("/add/todo",(req,res)=>{
    const {todo}=req.body;
    const newTodo=new Todo({todo})
    console.log(todo)
    newTodo.save()
    .then(()=>{
        console.log("Succesfully Add Todo")
        res.redirect("/")
    })
    .catch((err)=>console.log(err));
   
})
.get("/delete/todo/:_id",(req,res)=>{
    const {_id}=req.params;
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("deleted successfully")
        res.redirect("/")
    })
    .catch((err)=>{console.log(err)});
})
module.exports=router;