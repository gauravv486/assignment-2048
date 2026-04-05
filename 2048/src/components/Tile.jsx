export default function Tile({ value }) {

    const getStyle = (num) => {
        const styles = {
            0: { background: "#cdc1b5", color: "transparent" },

            2: { background: "#eee4da", color: "#727371" },
            4: { background: "#ece0ca", color: "#727371" },

            8: { background: "#f4b17a", color: "white" },
            16: { background: "#f59575", color: "white" },
            32: { background: "#f57c5f", color: "white" },
            64: { background: "#f65d3b", color: "white" },

            128: { background: "#edce71", color: "white" },
            256: { background: "#edcc63", color: "white" },
            512: { background: "#edc651", color: "white" },

            1024: { background: "#eec744", color: "white" },
            2048: { background: "#ecc230", color: "white" },

            4096: { background: "#fe3d3d", color: "white" },
            8192: { background: "#ff2020", color: "white" },
        };

        return styles[num] || { background: "#3c3a32", color: "white" };
    };

    const style = getStyle(value);

    return (
        <div
            style={style}
            className="aspect-square flex items-center justify-center font-bold text-lg md:text-2xl rounded"
        >
            {value !== 0 ? value : ""}
        </div>
    );
}