import Board from './components/Board';
import PhoneControls from './components/PhoneControls.jsx';
import Score from './components/Score.jsx';
import useGame2048 from './hook/useGameLogic.js'

const App = () => {
  const { board, score, move , resetGame} = useGame2048();

  return (
    <div className="flex flex-col items-center mt-2">
      <h1 className="text-3xl font-bold">2048</h1>

      <Score score={score} />

      <button
        onClick={resetGame}
        className="mt-2 bg-[#8f7a66] text-white px-4 py-2 rounded-lg"
      >
        New Game
      </button>

      <Board board={board} />
      <PhoneControls onMove={move} />

    </div>
  )
}

export default App;
