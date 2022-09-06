
const express = require('express')
const router = express.Router()

router.use(logger)


router.get('/',(req,res)=>{
    console.log(req.query.name)
    //만약 URL에서 직접적으로 query 값을 건드릴때 ex: name=Kyle 동작을 해준다. req.query
    res.send('user list')
})
router.get('/new',(req,res)=>{
    // res.send("Use New Form")
    res.render("users/new", {firstName: "Test" })
})

router.post('/',(req,res)=>{
    // res.send("Crate user")
    const isValid = true
    if(isValid){
        users.push({firstName: req.body.firstName})
        res.redirect(`/users/${users.length -1}`)
    }else{
        console.log("Error")
        res.render("users/new", {firstName: req.body.firstName})
    }
    // console.log(req.body.firstName)
    // res.send("HI")
})










router
.route("/:id").get((req,res)=>{
    console.log(req.user)

    res.send(`Get User with ID ${req.params.id}`)

})
.put((req,res)=>{
    res.send(`Update User with ID ${req.params.id}`)
})
.delete((req,res)=>{
    res.send(`delete User with ID ${req.params.id}`)
})

// this is same thing with upper code
// router.get('/:id',(req,res)=>{
//     res.send(`Get User with ID ${req.params.id}`)
// }
// )

// router.put('/:id',(req,res)=>{
//     res.send(`Update User with ID ${req.params.id}`)
// }
// )

// router.delete('/:id',(req,res)=>{
//     res.send(`delete User with ID ${req.params.id}`)
// }
// )
const users = [{name: "Kyle"}, {name:"Sally"}]
router.param("id",(req,res,next,id)=>{
    req.user = users[id]
    next() //it prevents infinite loading
})

function logger(req,res,next){
    console.log(req.originalUrl)
    next()
}
//param is one version of middlware

module.exports = router