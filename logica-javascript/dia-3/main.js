// Você deseja seguir na área de Front-End ou Back-End?

// Front-End: O que você prefere aprender primeiro, React ou Vue?
// Back-End: O que você prefere aprender primeiro, C# ou Java?

// Independente da resposta: Você deseja seguir se especializando na área que escolheu ou seguir se desenvolvendo para se tornar Fullstack?

// Qual tecnologia você gostaria de se especializar ou conhecer? Tem mais alguma tecnologia que você gostaria de aprender?

// As tecnologias que você escolheu são demais! Aposto como você se dará muito bem.

const frontOrBackQuestion = () => {
    const answer = prompt('Você deseja seguir na área de "front end" ou "back end"?')
    answer == 'front end' ? reactOrVueQuestion() : cSharpOrJavaQuestion()
}

const reactOrVueQuestion = () => {
    const answer = prompt('O que você prefere aprender primeiro, "react" ou "vue"?')
    specialistOrFullstack()
}

const cSharpOrJavaQuestion = () => {
    const answer = prompt('O que você prefere aprender primeiro, "C#" ou "java"?')
    specialistOrFullstack()
}

const specialistOrFullstack = () => {
    const answer = prompt('Você deseja seguir se especializando na área que escolheu ou deseja seguir se desenvolvendo para se tornar Fullstack?')
    extraTechs()
}

const extraTechs = () => {
    const answer = []
    answer.push(prompt('Qual tecnologia você gostaria de se especializar ou conhecer?'))
    const continueAsking = prompt('Tem mais alguma tecnologia que você gostaria de aprender? "sim" ou "nao"?')
    continueAsking == 'sim' ? extraTechs() : finalMessage()
}

const finalMessage = () => {
    alert('As tecnologias que você escolheu são demais! Aposto como você se dará muito bem.')
}

frontOrBackQuestion()