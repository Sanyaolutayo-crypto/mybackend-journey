const express=require('express');
const app = express();
const PORT=3000;
//Home route
app.get('/', (req,res) => {
    res.send('welcome to the Home pagr');
});

//About route
app.get('/about',(req,res)=>{
    res.send('This is the About page');
});

//contact rout
app.get('/contact',(req,res)=>{
    res.send('contact us here');
});

//Start server
app.iste(PORT, ()=>{
    console.log('Server running on port ${PORT}');
});