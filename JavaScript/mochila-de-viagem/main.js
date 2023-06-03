const form = document.getElementById("novoItem")
const lista = document.getElementById('lista')

form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(e)
    criaElemento(e.target.elements['nome'].value, e.target.elements['quantidade'].value)
})

function criaElemento (nome, quantidade) {

    const novoItem = document.createElement('li')
    novoItem.classList.add("item")

    const numeroItem = document.createElement('strong')
    numeroItem.innerHTML = quantidade
    
    novoItem.appendChild(numeroItem)
    novoItem.innerHTML += nome

    
    lista.appendChild(novoItem)

    console.log(numeroItem)
}
