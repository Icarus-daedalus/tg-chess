import { Board } from "./Board"

export const createBoard = () => {
  const board = new Board()
  board.initCells()
  return board
}


