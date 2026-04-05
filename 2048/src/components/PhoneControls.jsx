export default function PhoneControls({ onMove }) {
    return (
        <div className="mt-2 flex flex-col items-center gap-2">
            <p className="text-center text-sm text-[#776e65] mt-2 italic">
                *Use your keyboard arrows or buttons to play
            </p>
            <button onClick={() => onMove("UP")} className="bg-[#cdc1b5] text-[#776e65] px-6 py-3 rounded-lg text-sm font-bold flex flex-col items-center">up</button>

            <div className="flex gap-2">
                <button onClick={() => onMove("LEFT")} className="bg-[#cdc1b5] text-[#776e65] px-6 py-3 rounded-lg text-sm font-bold flex flex-col items-center">left</button>
                <button onClick={() => onMove("RIGHT")} className="bg-[#cdc1b5] text-[#776e65] px-6 py-3 rounded-lg text-sm font-bold flex flex-col items-center">right</button>
            </div>

            <button onClick={() => onMove("DOWN")} className="bg-[#cdc1b5] text-[#776e65] px-6 py-3 rounded-lg text-sm font-bold flex flex-col items-center">down</button>
        </div>
    );
}