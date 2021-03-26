const board = document.getElementById("snakeboard");
const board_context = board.getContext("2d");

let snake = [{
    x: 200,
    y: 200
  },
  {
    x: 190,
    y: 200
  },
  {
    x: 180,
    y: 200
  },
  {
    x: 170,
    y: 200
  },
  {
    x: 160,
    y: 200
  },
];
let food = {
  x: 0,
  y: 0
};

function clearBoard() {
  board_context.fillStyle = 'white';
  board_context.strokeStyle = 'black';
  board_context.fillRect(0, 0, board.width, board.height);
  board_context.strokeRect(0, 0, board.width, board.height);
}

function drawSnakePart(snake_part) {
  board_context.fillStyle = 'lightblue';
  board_context.strokeStyle = 'darkblue';
  board_context.fillRect(snake_part.x, snake_part.y, 10, 10);
  board_context.strokeRect(snake_part.x, snake_part.y, 10, 10);
}

function drawFood(food) {
  board_context.fillStyle = 'lightgreen';
  board_context.strokeStyle = 'darkred';
  board_context.fillRect(food.x, food.y, 10, 10);
  board_context.strokeRect(food.x, food.y, 10, 10);
}

function drawSnake() {
  snake.forEach(drawSnakePart);
}

function sameCoords(one, two) {
  return (one.x === two.x) && (one.y === two.y);
}

function randomFoodCoord(min, max) {
  return Math.round((Math.random() * (max - min) + min) / 10) * 10;
}

function generateFood() {
  food.x = randomFoodCoord(0, board.width - 10);
  food.y = randomFoodCoord(0, board.height - 10);
  // Checa se a nova localização de food está no local da cobra, se sim, gera uma nova localização de comida.
  snake.forEach(
    part => {
      if (sameCoords(part, food)) {
        generateFood();
      }
    }
  );

}

clearBoard();
drawFood(food);
drawSnake();

// inicia o jogo
function run() {
  // registra um Listener para as teclas pressionadas
  document.addEventListener("keydown", changeDirection);
  generateFood();
  mainLoop();
}