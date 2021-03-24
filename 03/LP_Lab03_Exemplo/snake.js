"use strict";

// ----------------------------------------------------------------------------
// Globals

let snake = [
    {x: 200, y: 200},
    {x: 190, y: 200},
    {x: 180, y: 200},
    {x: 170, y: 200},
    {x: 160, y: 200},
];

let score = 0;
let changingDirection = false;
let food = {x: 0, y: 0};
let velocity = {dx: 10, dy: 0};

// ----------------------------------------------------------------------------
// GUI

const boardBorder = "black";
const boardBackground = "white";
const snakeColor = "lightblue";
const snakeBorder = "darkblue";
const foodColor = "lightgreen";
const foodBorder = "darkgreen";

// Get the canvas element
const board = document.getElementById("snakeboard");
// Return a two dimensional drawing context
const boardContext = board.getContext("2d");

// Draw a border around the canvas
function clearBoard() {
    //  Select the color to fill the drawing
    boardContext.fillStyle = boardBackground;
    //  Select the color for the border of the canvas
    boardContext.strokestyle = boardBorder;
    // Draw a "filled" rectangle to cover the entire canvas
    boardContext.fillRect(0, 0, board.width, board.height);
    // Draw a "border" around the entire canvas
    boardContext.strokeRect(0, 0, board.width, board.height);
}

function drawFood() {
    boardContext.fillStyle = foodColor;
    boardContext.strokestyle = foodBorder;
    boardContext.fillRect(food.x, food.y, 10, 10);
    boardContext.strokeRect(food.x, food.y, 10, 10);
}

function drawSnakePart(snakePart) {
    boardContext.fillStyle = snakeColor;
    boardContext.strokestyle = snakeBorder;
    boardContext.fillRect(snakePart.x, snakePart.y, 10, 10);
    boardContext.strokeRect(snakePart.x, snakePart.y, 10, 10);
}

function drawSnake() {
    snake.forEach(drawSnakePart);
}

// ----------------------------------------------------------------------------
// Game logic

function sameCoords(one, two) {
    return (one.x === two.x) && (one.y === two.y);
}

function randomFoodCoord(min, max) {
    return Math.round((Math.random() * (max-min) + min) / 10) * 10;
}

function generateFood() {
    food.x = randomFoodCoord(0, board.width - 10);
    food.y = randomFoodCoord(0, board.height - 10);
    // Check if the new food location is where the snake currently is,
    // if so, generate a new food location.
    snake.forEach(
        part => {
            if (sameCoords(part, food)) generateFood();
    });
}

function moveSnake() {
    // Create the new snake head
    const head = {x: snake[0].x + velocity.dx, y: snake[0].y + velocity.dy};
    // Add the new head to the beginning of snake body
    snake.unshift(head);
    if (sameCoords(head, food)) {
        // Increase score
        score += 10;
        // Display score on screen
        document.getElementById("score").innerHTML = score;
        // Generate new food location
        generateFood();
    } else {
        // Remove the last part of snake body
        snake.pop();
    }
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    // Prevent the snake from reversing
    if (changingDirection) return;
    changingDirection = true;

    const keyPressed = event.keyCode;
    const goingUp    = velocity.dy === -10;
    const goingDown  = velocity.dy === 10;
    const goingRight = velocity.dx === 10;
    const goingLeft  = velocity.dx === -10;

    if (keyPressed === LEFT_KEY && !goingRight) {
        velocity.dx = -10;
        velocity.dy = 0;
    } else if (keyPressed === UP_KEY && !goingDown) {
        velocity.dx = 0;
        velocity.dy = -10;
    } else if (keyPressed === RIGHT_KEY && !goingLeft) {
        velocity.dx = 10;
        velocity.dy = 0;
    } else if (keyPressed === DOWN_KEY && !goingUp) {
        velocity.dx = 0;
        velocity.dy = 10;
    }
}

function gameOver() {
    let head = snake[0];
    // Check if head has hit its own body.
    for (let i = 4; i < snake.length; i++) {
        if (sameCoords(head, snake[i])) return true;
    }
    const hitLeftWall   = head.x < 0;
    const hitRightWall  = head.x > board.width - 10;
    const hitTopWall    = head.y < 0;
    const hitBottomWall = head.y > board.height - 10;
    return hitLeftWall || hitRightWall || hitTopWall || hitBottomWall;
}

function mainLoop() {
    if (gameOver()) return;

    changingDirection = false;
    setTimeout(function onTick() {
                    clearBoard();
                    drawFood();
                    moveSnake();
                    drawSnake();
                    mainLoop(); // repeat
                }, 100);
}

// Start the game
function run() {
    // Register a listener for key presses.
    document.addEventListener("keydown", changeDirection);
    generateFood();
    mainLoop();
}

run();
