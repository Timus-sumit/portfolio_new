const express = require('express');
const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 3000;


//Setting the static folder
app.use(express.static(path.join(__dirname, './public')));

//server call back
app.listen(PORT,()=>{
    console.log(`Server Running on port : ${PORT}`);
})

