import React from 'react'
import Board from './components/Board';

const App = () => {
  const { board, score } = useGame2048();

  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-3xl font-bold">2048</h1>
      <Board board={board} />
    </div>
  )
}

export default App;
