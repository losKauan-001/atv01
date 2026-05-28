let itens = []

const botaoAdicionarItens = document.querySelector(".adicionar-item button")
const textAdicionarItens = document.querySelector(".adicionar-item input")
botaoAdicionarItens.addEventListener("click", adcionarItem)

function adcionarItem(){
    const textInput = document.querySelector("#novo-item").value
    
    if (textInput === "") {
        alert("Digite um item válido")
    } else {
        const novoItem = {
            descricao: textInput,
            concluido: false
        }

        itens.push(novoItem)

        document.querySelector("#novo-item").value = ""
        console.log(itens)
    }
}


























/*
    NOTA:
        querySelector: procura por um "H1" por exemplo.
        Ele acha o primeiro h1 em ordem execução.

        getElementById: procura pelo id.

        addEventListener: adiciona um evento ao botão.
*/