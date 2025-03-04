import DOM from './gameDOM.js';

let gameState = {
    // head first, then body and tail
    snake: [[1, 0], [0, 0]],
    inputBuffer: [""],
    dir: [0, 0],
    apple: [4, 4],
    score: 0,
    over: false,
    freezeTail: false,
};

function resetGameState (){
    gameState.snake = [[1, 0], [0, 0]];
    gameState.inputBuffer = [""];
    gameState.dir = [0, 0];
    gameState.apple =  [4, 4];
    gameState.score = 0;
    gameState.over = false;
}

const game = {
    gridSize: 9,
    /**
     * @type {CanvasRenderingContext2D}
     */
    gameCanvas: DOM.GameCanvas.getContext('2d'),
    gameLoop: 0,
    moved: false,

    startGame() {
        resetGameState();
        game.updateScore();
        DOM.hideModal();
        game.gameLoop = setInterval(game.frame, 150);
    },
    changeDir (key){
        if(game.moved) return;
        game.moved = true;

        if (key === "ArrowUp" && gameState.dir[1] != 1) {
            gameState.dir[0] = 0;
            gameState.dir[1] = -1;
        } else if (key === "ArrowDown" && gameState.dir[1] != -1) {
            gameState.dir[0] = 0;
            gameState.dir[1] = 1;
        } else if (key === "ArrowLeft" && gameState.dir[0] != 1) {
            gameState.dir[0] = -1;
            gameState.dir[1] = 0;
        } else if (key === "ArrowRight" && gameState.dir[0] != -1) {
            gameState.dir[0] = 1;
            gameState.dir[1] = 0;
        }
    },
    growSnake (){
        gameState.freezeTail = true;
        gameState.score++;
        game.updateScore();
    },
    updateScore (){
        DOM.Score.innerText = `Score: ${gameState.score}`;
    },
    newApple(){
        while (
        gameState.snake.find((part) => {
            return  part[0] == gameState.apple[0] &&
                    part[1] == gameState.apple[1];
        })) {
            gameState.apple = [
                ~~(Math.random() * game.gridSize),
                ~~(Math.random() * game.gridSize)
            ];
        }
    },
    frame (){
        if (gameState.inputBuffer[0] !== "")
            game.changeDir(gameState.inputBuffer.shift());

        if (gameState.dir[0] != 0 ||
            gameState.dir[1] != 0) {
            // Update head
            gameState.snake.unshift([
                gameState.snake[0][0] + gameState.dir[0],
                gameState.snake[0][1] + gameState.dir[1]
            ]);

            if (!gameState.freezeTail) {
                gameState.snake.pop();
            }

            gameState.freezeTail = false;
        }

        game.moved = false;

        // Check snake body is out of wall or not
        if (gameState.snake[0][0] < 0 || gameState.snake[0][0] > game.gridSize ||
            gameState.snake[0][1] < 0 || gameState.snake[0][1] > game.gridSize) {
            game.endGame();
        }

        for (let i = 1; i < gameState.snake.length; i++) {
            // Check snake head hit body or not
            if (i !== 0 && gameState.snake[0][1] === gameState.snake[i][1] &&
                    gameState.snake[0][0]        === gameState.snake[i][0]) {
                game.endGame();
            }
        }

        if (gameState.snake[0][0] === gameState.apple[0] &&
            gameState.snake[0][1] === gameState.apple[1]) {
            game.growSnake();
            game.newApple();
        }

        game.render();
    },
    render (){
        const ctx = game.gameCanvas;

        ctx.clearRect(0, 0, 400, 400);

        ctx.fillStyle = '#9F9';
        ctx.fillRect(
            gameState.snake[0][0] * 40,
            gameState.snake[0][1] * 40,
            40, 40
        );

        ctx.fillStyle = '#6E7';
        for (let i = 1; i < gameState.snake.length - 1; i++) {
            ctx.fillRect(
                gameState.snake[i][0] * 40,
                gameState.snake[i][1] * 40,
                40, 40
            );
        }

        ctx.fillStyle = '#3A5';
        ctx.fillRect(
            gameState.snake[gameState.snake.length - 1][0] * 40,
            gameState.snake[gameState.snake.length - 1][1] * 40,
            40, 40
        );

        ctx.fillStyle = '#99F';
        ctx.fillRect(
            gameState.apple[0] * 40 + 5,
            gameState.apple[1] * 40 + 5,
            30, 30
        );
    },
    endGame() {
        clearInterval(game.gameLoop);
        gameState.over = true;
        resetGameState();
        DOM.showModal();
    }
};

export { game, gameState };
