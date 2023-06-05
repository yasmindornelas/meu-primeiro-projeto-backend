const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: "Yasmin Dornelas",
        imagem: "https://media.licdn.com/dms/image/C4D03AQFIlJfbvGXCag/profile-displayphoto-shrink_200_200/0/1660761599038?e=1691625600&v=beta&t=gfL0sPdORIAk04AyfAoKtozjDj5E-QaFZh1IMgvmRtE",
        minibio: "Desenvolvedora iniciante",
    })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)