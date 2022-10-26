const express = require('express');
const app = express();
const db = require('../ProjetoJobNode/db/conection');

// comum colocar uma porta em constante e que depois poder� se tornar uma variavel 

const PORT=3000;

// Para escutar a Rota 
app.listen(PORT, function(){
    console.log(`O express est� rodando na porta ${PORT}`)
})


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


