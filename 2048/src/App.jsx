import Board from './components/Board';
import Score from './components/Score.jsx';
import useGame2048 from './hook/useGameLogic.js'

const App = () => {
  const { board, score } = useGame2048();

  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="text-3xl font-bold">2048</h1>

      <Score score={score} />
      <Board board={board} />

    </div>
  )
}

export default App;
