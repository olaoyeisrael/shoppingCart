
const express = require ('express')
const path = require ('path')


const app = express()
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))  

app.set('view engine', 'ejs')

app.get('/',(req, res)=>{
    // res.sendFile(path.resolve(__dirname, './index.html'))
    res.render('index')

})


app.get('/store',(req, res)=>{
    // res.sendFile(path.resolve(__dirname, './store.html'))
    res.render('store')


})

app.get('/about',(req, res)=>{
    // res.sendFile(path.resolve(__dirname, './about.html'))
    res.render('about')

})

app.use((req,res)=>{
    res.status(404).render('404',{title: '404!'});
    
    })




app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})


