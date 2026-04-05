export default function PhoneControls({ onMove }) {
    return (
        <div className="mt-6 flex flex-col items-center gap-2 md:hidden">
            <button onClick={() => onMove("UP")} className="btn bg-gray-800 text-white px-6 py-3 rounded-lg text-xl">⬆️</button>

            <div className="flex gap-2">
                <button onClick={() => onMove("LEFT")} className="btn bg-gray-800 text-white px-6 py-3 rounded-lg text-xl">⬅️</button>
                <button onClick={() => onMove("RIGHT")} className="btn bg-gray-800 text-white px-6 py-3 rounded-lg text-xl">➡️</button>
            </div>

            <button onClick={() => onMove("DOWN")} className="btn bg-gray-800 text-white px-6 py-3 rounded-lg text-xl">⬇️</button>
        </div>
    );
}