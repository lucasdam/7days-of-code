const name = prompt('Qual o seu nome?')
const age = prompt('Quantos anos você tem?')
const language = prompt('Qual linguagem de programação você está estudando?')

alert(`Olá ${name}, você tem ${age} anos e já está aprendendo ${language}!`)

const number = prompt(`Você gosta de estudar ${language}?\nResponda com o número 1 para SIM ou 2 para NÃO.`)

if (number == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
} else if (number == 2) {
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}