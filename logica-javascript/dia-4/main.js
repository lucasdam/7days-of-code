/* 
Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.
*/

let tries = 3
let playerGuess = prompt(`Tente acertar o número que escolhi de 0 a 10. Você tem ${tries} tentativa(s)!`)

while (tries > 0) {
    tries--
    if (playerGuess != randomNumber) {
        if (tries == 0) {
            alert(`Não foi dessa vez... o número era o ${randomNumber}. Mas não desanime, você pode tentar novamente recarregando esta página!`)
        } else {
            playerGuess = prompt(`Você errou... Tente novamente! Você tem ${tries} tentativas!`)
        }
    } else {
        alert(`Parabéns! Você acertou! O número era ${randomNumber}.`)
        break
    }
}