import Tile from "./Tile";

export default function Board({ board }) {
    if (!board || board.length === 0) return null;

    return (
        <div className="grid grid-cols-4 gap-3 bg-[#bbada0] p-3 rounded-xl shadow-md mt-4 w-full max-w-xs mx-auto">
            {board.map((row, r) =>
                row.map((val, c) => (
                    <Tile key={`${r}-${c}`} value={val} />
                ))
            )}
        </div>
    );
}