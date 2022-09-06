const express = require("express")
const app = express()
app.set("view engine", "ejs")

app.use(express.static("public"))
app.use(express.urlencoded({extended: true})) //this allows us to access information coming from forms so inside of here we also need to pass a object that has extended set to true this 
// public is folder name


// if u posting json information to server: 'app.use(express.json()) ' === app.use(express.urlencoded({extended: true}))

// app.get("/",(req,res)=>{




//     res.render("index")
//     // res.render("index",{text:"world"})
//     // res.send("Hi")
// })



const userRouter = require('./routes/users')
// const postRouter = require('./routes/posts')
app.use('/users',userRouter)
// app.use('/posts',postRouter)

 

app.listen(3000)