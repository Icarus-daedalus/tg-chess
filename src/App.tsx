import { useState } from 'react'
import './App.css'
import BoardComponent from './components/BoardComponent'
import { createBoard } from './models/CreateBoard'

function App() {
  const [board, setBoard] = useState(createBoard)

  return (
    <div className="app">
      <BoardComponent 
      board={board}
      setBoard={setBoard}/>
    </div>
  )
}

export default App
