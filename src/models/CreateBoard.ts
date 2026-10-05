import { Board } from "./Board"

export const createBoard = () => {
  const board = new Board()
  board.initCells()
  board.addFigures()
  return board
}


