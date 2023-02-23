'use strict'

import { produtos } from "./produtos.js"

const criarCard = (produto) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.classList.add('card__image')
    img.src = `./img/${produto.image}`

    const titulo = document.createElement('h5')
    titulo.classList.add('card__title')
    titulo.textContent = produto.name

    const descricao = document.createElement('p')
    descricao.classList.add('card__description')
    descricao.textContent = produto.description

    const preco = document.createElement('span')
    preco.classList.add('card__price')
    preco.textContent = produto.price
    // card.appendChild(img)
    // card.appendChild(titulo)
    // card.appendChild(descricao)
    card.append(img, titulo, descricao, preco)

    return card
}


const carregarProdutos = () => {
    const container = document.getElementById('container')
    const cards = produtos.map(criarCard)

    container.replaceChildren(...cards)
}


carregarProdutos()



/*const precos = [10, 23, 51, 90]
funcao para adicionar 2

const adicionarFrete = (preco) => preco + 2
const precosFrete = precos.map(adicionarFrete)

console.log(adicionarFrete[1])
*/


/*const precos = [10, 23, 51, 90]
looping para adicionar 2 os precos por For

const limite = precos.length
const precosFrete = []

for(let contador = 0; contador<limite; contador++ ){
    precosFrete[contador] = precos[contador]  +2
}

*/

/*const precos = [10, 23, 51, 90]
looping pra adicionar 2 nos precos por While

const limite = precos.length
const precosFrete = []
let contador = 0
while (contador < limite){
    precosFrete[contador] = precos + 2
    contador++
}
*/
