const express =require('express'); // Lida com a parte de rotas 
const router = express.Router(); // obj de rota do express

const Job = require('../models/Job');


//adicionar job via Post

router.post('/add', (req,resp)=>{

    let {title, salary, company, description, email,new_job}=req.body;


    //Inserindo Dados

    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job

    })

    
// promisse 


})



