import DOM from './gameDOM.js';
import { game, gameState } from './game.js';

// Event Listeners
DOM.restart.addEventListener("click", game.startGame);

document.addEventListener("keydown", (evt) => {
    // Prevent hold
    if (evt.repeat) return;
    if (!evt.key.startsWith("Arrow")) return;

    gameState.inputBuffer.unshift(evt.key);
});

DOM.mobileButtons[0].addEventListener("click",
    () => gameState.inputBuffer.unshift("ArrowUp"));

DOM.mobileButtons[1].addEventListener("click",
    () => gameState.inputBuffer.unshift("ArrowLeft"));

DOM.mobileButtons[2].addEventListener("click",
    () => gameState.inputBuffer.unshift("ArrowDown"));

DOM.mobileButtons[3].addEventListener("click",
    () => gameState.inputBuffer.unshift("ArrowRight"));

game.startGame();
