const express = require("express")
const router = express.Router()

const app = express()
const porta =3333

    const mulheres =[
    {
        nome:'Yasmin Dornelas',
        imagem: 'https://media.licdn.com/dms/image/C4D03AQFIlJfbvGXCag/profile-displayphoto-shrink_200_200/0/1660761599038?e=1691625600&v=beta&t=gfL0sPdORIAk04AyfAoKtozjDj5E-QaFZh1IMgvmRtE',
        minibio: 'Desenvolvedora iniciante'
    },
    {
        nome: 'Ceriza Moreira',
        imagem: 'https://www.facebook.com/photo/?fbid=881762078628505&set=a.105746706230050&__tn__=%3C',
        minibio: 'Design de interiores'
    },
    {
        nome:'Amanda Dornelas',
        imagem:'https://scontent.fbsb8-1.fna.fbcdn.net/v/t39.30808-6/273460089_2517317021736453_1943813178652992613_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG-H9S6JxC-a51HIoidqfzEFoeDJru-g6gWh4Mmu76DqGtj4ug22XuwaetPNUey63_wcm-9URW9jpAvnQm2-B8I&_nc_ohc=i9jwqtWQO9cAX8rlGkV&_nc_ht=scontent.fbsb8-1.fna&oh=00_AfDm2DYd86sVu_BVGYrJDJuLkYNBp3zGxdfb4v5RVq_8uQ&oe=64810490',
        minibio:'Esteticista e Biomedica'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)