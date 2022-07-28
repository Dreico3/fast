const {server} =require('./server.js');
require('dotenv').config({path:'./.env'});

server.listen(process.env.PORT,()=>{
    console.log("server corriendo en el puerto "+process.env.PORT+"...");
})