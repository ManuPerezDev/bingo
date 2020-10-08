import _ from 'lodash'

const numberList = _.range(0, 91)
const shuffledList = _.shuffle(numberList)

let playerCardNumbers = []
let cpuCardNumbers = []

const populateCard = (selector) => {
  const numberList = _.range(1, 91)
  const shuffledList = _.shuffle(numberList)
  const cardNumbers = shuffledList.slice(0, 15)

  cardNumbers.forEach((e) => {
    const div = document.createElement('div')
    div.className = `number number-${e}`
    div.textContent = e

    document.querySelector(selector).appendChild(div)
  })

  return cardNumbers
}

const getNumber = () => {
  const number = shuffledList.pop()
  document.querySelector('.number-bingo').textContent = number
  checkCardNumbers(`.number-${number}`)
  removeFromPlayerNumberList(number)
  checkWinner()
}

const checkCardNumbers = (element) => {
  const listNodes = document.querySelectorAll(element)
  listNodes.forEach((e) => {
    e.style.color = 'red'
    e.style.textDecoration = 'line-through'
  })
}

const removeFromPlayerNumberList = (number) => {
  _.pull(playerCardNumbers, number)
  _.pull(cpuCardNumbers, number)
}

const checkWinner = () => {
  if (playerCardNumbers.length === 0) {
    document.querySelector('.container.player h2').style.backgroundColor = 'green'
    button.remove()
  }
  if (cpuCardNumbers.length === 0) {
    document.querySelector('.container.cpu h2').style.backgroundColor = 'green'
    button.remove()
  }
  if (playerCardNumbers.length === 0 && cpuCardNumbers.length === 0) {
    document.querySelector('.container.cpu h2').style.backgroundColor = 'yellow'
    button.remove()
  }
}

const startGame = () => {
  playerCardNumbers = populateCard('.container.player .card')
  cpuCardNumbers = populateCard('.container.cpu .card')
}

const button = document.querySelector('.btn')
button.onclick = getNumber

startGame()
