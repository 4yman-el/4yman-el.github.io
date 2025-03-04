import { Players } from "./constants.js";
import Game from './game.js';

function AIMove() {
    const availableMoves = [];

    // Collect all available moves (empty cells)
	Game.cells.forEach((col, colIndex) => {
		col.forEach(cell => {
			if (col[cell] === Players.EMPTY) {
				availableMoves.push({ col: colIndex, cell });
			}
		});
	});

	if (availableMoves.length == 0) {
		return;
	}

    // Pick a random move from available moves
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    Game.captureCell(randomMove.col, randomMove.cell);
}

export default AIMove;
