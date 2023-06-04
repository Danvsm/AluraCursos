const form = document.getElementById("novoItem")
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || []
console.log(itens)

itens.forEach((elemento) => {
    criaElemento(elemento)
})


form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = e.target.elements['nome']
    const quantidade = e.target.elements['quantidade']

    const existe = itens.find(e => e.nome === nome.value)

    const itemAtual = { 
        'nome': nome.value,
        'quantidade': quantidade.value
    }


    if (existe) {
        itemAtual.id = existe.id
        console.log(existe.id)


        atualizaElement(itemAtual)
    } else {
        itemAtual.id = itens.length
    
        criaElemento(itemAtual)
    
        itens.push(itemAtual)
    }
    
    console.log(existe)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})



function criaElemento (item) {
    if (item.nome !== '' && item.quantidade !== '') {
        const novoItem = document.createElement('li')
        novoItem.classList.add("item")
    
        const numeroItem = document.createElement('strong')
        numeroItem.innerHTML = item.quantidade
        numeroItem.dataset.id = item.id
        novoItem.appendChild(numeroItem)
        
        novoItem.innerHTML += item.nome

        lista.appendChild(novoItem)
    }
   
}

function atualizaElement (item) {
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade

}