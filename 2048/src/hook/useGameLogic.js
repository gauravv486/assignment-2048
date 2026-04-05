import { useState, useEffect } from "react";

const SIZE = 4;

const createEmptyBoard = () => {
    return Array(SIZE).fill(0).map(() => Array(SIZE).fill(0));
}

export default function useGameLogic() {

    const [board, setBoard] = useState(() => {
        const saved = localStorage.getItem("2048-game");
        if (saved) return JSON.parse(saved).board;
        return createEmptyBoard();
    });

    const [score, setScore] = useState(() => {
        const saved = localStorage.getItem("2048-game");
        if (saved) return JSON.parse(saved).score;
        return 0;
    });

    useEffect(() => {
        if (board.flat().every((v) => v === 0)) {
            let newBoard = createEmptyBoard();
            newBoard = addTwo(addTwo(newBoard));
            setBoard(newBoard);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("2048-game", JSON.stringify({ board, score }));
    }, [board, score]);

    function addTwo(grid) {
        let empty = [];

        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                if (grid[r][c] === 0) empty.push([r, c]);
            }
        }

        if (empty.length === 0) return grid;

        const [r, c] = empty[Math.floor(Math.random() * empty.length)];
        grid[r][c] = 2;

        return JSON.parse(JSON.stringify(grid));
    }


    function filterZero(row) {
        return row.filter((n) => n !== 0);
    }

    function slide(row) {
        row = filterZero(row);
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === row[i + 1]) {
                row[i] *= 2;
                row[i + 1] = 0;
                setScore((prev) => prev + row[i]);
            }
        }
        row = filterZero(row);
        while (row.length < SIZE) row.push(0);
        return row;
    }

    function slideLeft(grid) {
        return grid.map((row) => slide(row));
    }

    function slideRight(grid) {
        return grid.map((row) => slide([...row].reverse()).reverse());
    }

    function slideUp(grid) {

        let newGrid = createEmptyBoard();

        for (let c = 0; c < SIZE; c++) {
            let col = grid.map((r) => r[c]);
            col = slide(col);
            for (let r = 0; r < SIZE; r++) {
                newGrid[r][c] = col[r];
            }
        }

        return newGrid;
    }

    function slideDown(grid) {

        let newGrid = createEmptyBoard();

        for (let c = 0; c < SIZE; c++) {
            let col = grid.map((r) => r[c]).reverse();
            col = slide(col).reverse();
            for (let r = 0; r < SIZE; r++) {
                newGrid[r][c] = col[r];
            }
        }

        return newGrid;
    }

    function boardsEqual(b1, b2) {
        return JSON.stringify(b1) === JSON.stringify(b2);
    }

    function checkWin(grid) {
        return grid.some((row) => row.includes(2048));
    }

    function canMerge(grid) {
        for (let r = 0; r < SIZE; r++) {
            for (let c = 0; c < SIZE; c++) {
                let val = grid[r][c];

                if (c < SIZE - 1 && grid[r][c + 1] === val) return true;
                if (r < SIZE - 1 && grid[r + 1][c] === val) return true;
            }
        }
        return false;
    }

    function hasEmptyCell(grid) {
        return grid.some((row) => row.includes(0));
    }

    function isGameOver(grid) {
        return !hasEmptyCell(grid) && !canMerge(grid);
    }

    function move(direction) {

        let newBoard = JSON.parse(JSON.stringify(board));

        if (direction === "LEFT") newBoard = slideLeft(newBoard);
        if (direction === "RIGHT") newBoard = slideRight(newBoard);
        if (direction === "UP") newBoard = slideUp(newBoard);
        if (direction === "DOWN") newBoard = slideDown(newBoard);

        if (!boardsEqual(board, newBoard)) {
            newBoard = addTwo(newBoard);

            if (checkWin(newBoard)) {
                setTimeout(() => alert("You Won!"), 100);
            }

            if (isGameOver(newBoard)) {
                setTimeout(() => alert("Game Over"), 100);
            }

            setBoard(newBoard);
        }
    }

    function resetGame() {
        localStorage.removeItem("2048-game");
        setScore(0);

        let newBoard = createEmptyBoard();
        newBoard = addTwo(addTwo(newBoard));
        setBoard(newBoard);
    }

    useEffect(() => {
        function handleKey(e) {
            if (e.code === "ArrowLeft") move("LEFT");
            if (e.code === "ArrowRight") move("RIGHT");
            if (e.code === "ArrowUp") move("UP");
            if (e.code === "ArrowDown") move("DOWN");
        }

        window.addEventListener("keyup", handleKey);
        return () => window.removeEventListener("keyup", handleKey);
    }, [board]);

    return { board, score, move, resetGame };
}



