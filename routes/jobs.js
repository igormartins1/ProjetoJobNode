const { application } = require('express');
const express = require('express'); // Lida com a parte de rotas 
const router = express.Router(); // obj de rota do express
const Job = require('../models/Job');

//Criando rota 
router.get('/teste',(req,resp)=>{
    resp.send('Deu certo');
});


//adicionar job via Post

router.post('/add', (req,resp)=>{

    let {title, salary, company, description, email,new_job}=req.body; // Todos os dados da requisicao


    //Inserindo Dados

    Job.create({          
        title,
        description,
        salary,
        company,
        email,
        new_job

    })
    .then(()=>resp.redirect('/'))
    .catch(err=> console.log(err));

})

module.exports=router;


