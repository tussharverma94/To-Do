const route = require('express').Router()


let todo_data = [
    {
        task : "Task 1"
    }
]

route.get('/', (req, res) => {
    // res.send("HELLO WORLD")
    res.render('home', {todo : todo_data})
})

route.post('/', (req, res) => {
    // console.log(JSON.stringify(req.query))
    user_reply_task = req.body.new_task
    if(user_reply_task === ""){
        console.log(user_reply_task)
        res.render('home',{
            empty : "cannot be empty!",
            todo: todo_data
        })
    }
    else{
        todo_data.push(
            {
                task: req.body.new_task
            })
        res.redirect('.')
    }
})

module.exports = route