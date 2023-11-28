'use strict'

const users = [
    {
        nome: 'Ana Coelho' ,
        id: '1564' ,
        email: 'ana@gmail.com' ,
        celular: '11 9-9969-5505' ,
        cidade: 'barueri',
        image: './img/ana-coelho.jpg',
        status: true
    },
    {
        nome: 'Hugo Gomes' ,
        id: '9624' ,
        email: 'Hugo@gmail.com' ,
        celular: '11 9-9969-5505',
        cidade: 'barueri',
        image: './img/hugo-gomes.jpg',
        status: false
    },
    {
        nome: 'Joana Pereira' ,
        id: '6564' ,
        email: 'Joana@gmail.com' ,
        celular: '11 9-9969-5505' ,
        cidade: 'osasco',
        image: './img/joana-pereira.jpg',
        status: true
    },
    {
        nome: 'Mariana Silva',
        id: '8564',
        email: 'mari@gmail.com',
        celular: '11 9-9969-5505',
        cidade: 'itapevi',
        image: './img/mariana-silva.jpg',
        status: true
    },
    {
        nome: 'José Chaves' ,
        id: '9897' ,
        email: 'jose@gmail.com' ,
        celular: '11 9-9969-5505',
        cidade: 'cotia',
        image: './img/jose-chaves.jpg',
        status: false
    }
]

const botaoExibir =document.getElementById('exibir')

function criarCard (user) {
    const container = document.getElementById('data-container')
    const card = document.createElement('div')

    // outra forma  let status = user.status ? '' : 'sombra'

    let status
    if(user.status){
        const status = ''
    }else{
        status = 'sombra'
    }
    
    card.className = `card ${status}`
    card.innerHTML = `
        <img src="${user .image}" alt="${user .nome}" class="card__photo">
        <h3 class="card__name">${user .nome}</h3>
        <p class="card__user-email">${user .email}</p>
        <p class="card__user-celular">${user .celular}</p>
        <p class="card__user-id">${user .id}</p>
    `

    container.appendChild(card)
}

function limparContainer (){
    const container = document.getElementById('data-container')
    container.textContent = ''
}

function exibir () {
    limparContainer()
    users.forEach(criarCard)
}



botaoExibir.addEventListener('click', exibir)