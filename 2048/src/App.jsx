import Board from './components/Board';
import PhoneControls from './components/PhoneControls.jsx';
import Score from './components/Score.jsx';
import useGame2048 from './hook/useGameLogic.js';

const floatingNumbers = [
  { value: 2, top: '8%', left: '5%', size: '2rem', opacity: 0.13, rotate: -15 },
  { value: 4, top: '20%', left: '88%', size: '2.5rem', opacity: 0.13, rotate: 20 },
  { value: 8, top: '70%', left: '6%', size: '3rem', opacity: 0.13, rotate: -10 },
  { value: 16, top: '85%', left: '80%', size: '2.2rem', opacity: 0.13, rotate: 12 },
  { value: 32, top: '45%', left: '92%', size: '2rem', opacity: 0.11, rotate: -20 },
  { value: 64, top: '55%', left: '2%', size: '2.8rem', opacity: 0.11, rotate: 8 },
  { value: 128, top: '12%', left: '75%', size: '2rem', opacity: 0.11, rotate: -5 },
  { value: 256, top: '78%', left: '45%', size: '2.5rem', opacity: 0.09, rotate: 15 },
  { value: 512, top: '30%', left: '3%', size: '2.2rem', opacity: 0.09, rotate: -18 },
  { value: 1024, top: '60%', left: '70%', size: '2rem', opacity: 0.09, rotate: 10 },
];

const App = () => {
  const { board, score, move, resetGame } = useGame2048();

  return (
    <div className="relative min-h-screen bg-[#faf8ef] flex flex-col items-center pt-10 px-4 overflow-hidden">

      {floatingNumbers.map(({ value, top, left, size, opacity, rotate }) => (
        <span
          key={value}
          className="absolute font-black text-[#776e65] pointer-events-none select-none"
          aria-hidden="true"
          style={{ top, left, fontSize: size, opacity, transform: `rotate(${rotate}deg)` }}
        >
          {value}
        </span>
      ))}

      <div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
      >
        <p
          className="font-bold text-[#663605] uppercase tracking-[0.45em]"
          style={{ opacity: 0.2, fontSize: '0.8rem' }}
        >
          Think. Merge. Conquer.
        </p>
      </div>

      <div className="relative z-10 w-full max-w-md flex justify-between items-center mb-6">
        <h1 className="text-5xl font-bold text-[#776e65]">2048</h1>
        <Score score={score} />
        <button
          onClick={resetGame}
          className="bg-[#8f7a66] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          New Game
        </button>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Board board={board} />
      </div>

      <div className="relative z-10 mt-2">
        <PhoneControls onMove={move} />
      </div>

    </div>
  );
};

export default App;