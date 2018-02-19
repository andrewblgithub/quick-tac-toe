let board = ['', '', '', '', '', '', '', '', '']

const setBoard = () => {
  board = ['', '', '', '', '', '', '', '', '']
}

let viewBoard = ''
let vbCounter = 0

const createViewBoard = () => {
  viewBoard = ''
  board.forEach(square => {
    viewBoard += square || '☐'
    vbCounter++
    if (vbCounter === 3) {
      viewBoard += '\n'
      vbCounter = 0
    }
  })
}

let player = 'X' // toggle between X and O

const boardDirections = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

const checkBoard = () => {
  for (let direction of boardDirections) {
    if (
      board[direction[0]] === board[direction[1]] && 
      board[direction[1]] === board[direction[2]] &&
      board[direction[0]] !== '' &&
      board[direction[1]] !== '' &&
      board[direction[2]] !== ''
    ) {
      return true
    }
  }
  return false
}

const turn = (square) => {
  if (board[square - 1] === '') {
    board[square - 1] = player
    if (player === 'X') {
      player = 'O'
    } else {
      player = 'X'
    }
  }
  createViewBoard()
  console.log(viewBoard)
  if (checkBoard()) {
    if (player === 'X') {
      console.log('O wins!')
    } else {
      console.log('X wins!')
    }
    setBoard()
  }
}

// turn(1)
// turn(4)
// turn(2)
// turn(5)
// turn(3)

module.exports = turn