let result = prompt('Adivinhe qual número estou pensando agora entre 0 e 10!')

const randomNumber = Math.round(Math.random() * 10) // random() -  gera um número aleatório entre não inclui o zero(0) e nem o um (1)!

let xAtempets = 1
while (Number(result) !== randomNumber) {
  result = prompt('Tente adivinhar o número novamente!')
  xAtempets++
}

if (xAtempets > 1) {
  alert(
    `Parabens você adivinhou o número ${randomNumber} na ${xAtempets}ª tentativas`
  )
} else {
  alert(
    `Parabens você adivinhou o número ${randomNumber} na ${xAtempets}ª tentativa`
  )
}

// let ceil = Math.ceil(randomNumber) //ceil(number) - arredonda o número para baixo!
// let floor = Math.floor(randomNumber) // floor(number) - arredonda o número para cima!
// let round = Math.round(randomNumber) // round(number) - arredonda para o número mais proximo. Regra baisica de matemática!
