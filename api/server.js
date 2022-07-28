const express = require("express");
const morgan = require('morgan');

const server = express();

server.use(express.json());
server.use(morgan('dev'));
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // la parte del * era un http://localhost:3000 se camvio a * para q todas las paginas puedaan leerla
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

server.get('/iecho', (req,res)=>{
    const {text}=req.query;
    var aux="";
   
    for(let i=text.length-1;i>=0;i--){
        if(/^[0-9]*$/.test(text[i])){
            return res.status(400).json({error:"no text"});
        }else{
            aux=aux+text[i]
        }
    }
    if(text===aux) return res.json({text:aux, palindromo:true})
    res.status(200).json({text:aux,palindromo:false});
})

module.exports = {server}