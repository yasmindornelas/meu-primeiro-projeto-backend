const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota
const cors = require('cors') //aqui estou trazendo o pacote cors que permite consumir essa API no front-end
const conectaBancoDeDados = require('./BancoDeDados') //aqui estou ligando ao arquivo BancoDeDados
conectaBancoDeDados() //chamando a função que conecta o banco de dados

const Mulher = require('./mulherModel')

const app = express() //aqui estou iniciando o app
app.use(express.json())
app.use(cors())

const porta =3333 //aqui estou criando a porta

//GET
async function mostraMulheres(request, response) {
    try{
        const mulheresVindasDoBancoDeDados = await Mulher.find()

        response.json(mulheresVindasDoBancoDeDados)
    }catch (erro){
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citação: request.body.citação
    })

    try {
        const mulherCriada = await novaMulher.save()
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro)
    }   
}
   
//PATCH
async function corrigeMulher(request, response) {
    try {
        const mulherEncontrada = await Mulher.findById(request.params.id)
        
        if (request.body.nome) {
            mulherEcontrada.nome = request.body.nome
        }
    
        if (request.body.minibio) {
            mulherEcontrada.minibio = request.body.minibio
        }
    
        if (request.body.imagem) {
            mulherEcontrada =request.body.imagem
        }

        if (request.body.citação) {
            mulherEncontrada = request.body.citação
        }

        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()
        
        response.json(mulherAtualizadaNoBancoDeDados) 

    } catch (erro) {
        console.log(erro)
    }
    
}
//Delete
async function deleteMulher(request, response) {
    try {
        await Mulher.findByIdAndDelete(request.params.id)
        response.json({mensagem: 'Mulher deletada com sucesso!'})
    } catch(erro) {
        console.log(erro)
    }
}


app.use(router.get('/mulheres', mostraMulheres)) //configurei rota GET /mulheres
app.use(router.post('/mulheres',criaMulher)) //configurei rota POST /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei rota PATCH /mulheres/:id
app.use(router.delete('/mulheres/:id', deleteMulher)) //configurei rota DELETE /mulheres/:id

//PORTA
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}


app.listen(porta, mostraPorta) //servidor ouvindo a porta