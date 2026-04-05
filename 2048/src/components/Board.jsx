import Tile from "./Tile";

export default function Board({ board }) {
    if (!board || board.length === 0) return null;

    return (
        <div className="grid grid-cols-4 gap-2 bg-[#9d8772] border-4 border-[#bbada0] p-2 mt-4 w-full max-w-sm mx-auto">
            {board.map((row, r) =>
                row.map((val, c) => (
                    <Tile key={`${r}-${c}`} value={val} />
                ))
            )}
        </div>
    );
}