const express =require("express")

const mongoose =require("mongoose")

const app =express()
mongoose.connect("mongodb+srv://himanshu:OQAnCRVxYH0FBpkU@cluster0.e6m8rve.mongodb.net/?retryWrites=true&w=majority")


//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set("view Engine","ejs");

//routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))

app.listen(3000,()=>console.log("server started listening"))
