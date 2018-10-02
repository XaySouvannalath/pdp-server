const express = require('express')
const app = express()
const courses = require('./routes/courses')
var path = require('path');
const person = require('./routes/allconsts')

app.use('/api/courses', courses)
/* app.get('/',(req,res)=>{
    res.send('hello world')
}) */

app.get('/user',(req,res)=>{
    console.log(person.name)
    res.send('this user page')
})
/* app.get('*', function(req, res){    
    res.sendFile(path.join(__dirname, './public/index.html'));
}); */
app.get('/', (req, res)=>{
    res.send('hello world')
})
/* app.use("/", express.static(path.join(__dirname, 'public'))); */





const server = app.listen(3000,()=>{
    const host = server.address().address
    const port = server.address().port
    console.log("Listening at http://%s:%s", host, port)
})