'use strict'

const users = [
    {
        nome: 'Ana Coelho' ,
        id: '1325484564' ,
        email: 'ana@gmail.com' ,
        celular: '11993295505' ,
        cidade: 'barueri',
        image: './img/ana-coelho.jpg'
    },
    {
        nome: 'Hugo Gomes' ,
        id: '9625488564' ,
        email: 'Hugo@gmail.com' ,
        celular: '11363295505' ,
        cidade: 'barueri',
        image: './img/hugo-gomes.jpg'
    },
    {
        nome: 'Joana Pereira' ,
        id: '6948488564' ,
        email: 'Joana@gmail.com' ,
        celular: '11996855505' ,
        cidade: 'osasco',
        image: './img/joana-pereira.jpg'
    },
    {
        nome: 'Mariana Silva',
        id: '6858488564',
        email: 'mari@gmail.com',
        celular: '11999695505',
        cidade: 'itapevi',
        image: './img/mariana-silva.jpg'
    },
    {
        nome: 'José Chaves' ,
        id: '98975488564' ,
        email: 'jose@gmail.com' ,
        celular: '11985295505' ,
        cidade: 'cotia',
        image: './img/jose-chaves.jpg'
    }
]

const botaoExibir =document.getElementById('exibir')

function criarCard (user) {
    const container = document.getElementById('data-container')
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
        <img src="${user .image}" alt="${user .nome}" class="card__photo">
        <h3 class="card__name">${user .nome}</h3>
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