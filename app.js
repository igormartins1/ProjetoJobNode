const express   = require('express');
const app       = express();
const db        = require('../ProjetoJobNode/db/conection');
const bodyParser= require('body-parser');
const router    = require('../ProjetoJobNode/routes/jobs')

// comum colocar uma porta em constante e que depois poder� se tornar uma variavel 

const PORT=3000;

// Para escutar a Rota 
app.listen(PORT, function(){
    console.log(`O express está rodando na porta ${PORT}`)
})


//Chamando o Body-Parser

app.use(bodyParser.urlencoded({extended:false}));


//Criando Conexao 

db
.authenticate()
.then(()=>{
    console.log('Conectou ao banco com sucesso');
})

.catch(err=>{
    console.log('Erro ao conecetar ao banco',err);

});

//criando uma rota 
app.get('/',(req,resp)=>{
    resp.send('testeIgor');
})


router.use('/jobs', require('./routes/jobs'));


