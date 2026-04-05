export default function Score({ score }) {
  return (
    <div className="bg-[#bbada0] text-white px-5 py-3 rounded-lg flex flex-col items-center">
      <span className="text-[10px] uppercase tracking-widest text-[#eee4da]">
        SCORE
      </span>
      <span className="text-2xl font-bold leading-none">
        {score}
      </span>
    </div>
  );
}