import express from  'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express'
import path  from 'path';
import mainRoutes from './routes/index';

//Configuração do ENV
dotenv.config();
const PORT =  process.env.PORT ;

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache',mustache());


server.use(express.json());
server.use(express.urlencoded({extended: true}));


server.use(express.static(path.join(__dirname,'../public')));

//Rotas

server.use(mainRoutes);

server.use((req,res)=>{
    res.render('pages/404');
})

server.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})