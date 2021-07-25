import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'


let food = getRandomFoodPosition()
let poi = getRandomFoodPosition()
const EXPANSION_RATE = 2


export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    food = getRandomFoodPosition()
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  const poisonElement = document.createElement('div')

  
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x

  

  poisonElement.style.gridRowStart = 5
  poisonElement.style.gridColumnStart = 5
  

  foodElement.classList.add('food')
  poisonElement.classList.add('poison')
  gameBoard.appendChild(foodElement)
  gameBoard.appendChild(poisonElement)
}


export function drawPoison(gameBoard) {
  const foodElement = document.createElement('div')
  //foodElement.style.gridRowStart = food.y
  foodElement.style.gridRowStart = 5

  //foodElement.style.gridColumnStart = food.x
  foodElement.style.gridColumnStart = 5
  foodElement.classList.add('poison')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}