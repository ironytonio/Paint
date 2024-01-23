var canvas = document.getElementById("canvas");
var decreaseBtn = document.getElementById("decrease");
var sizeEl = document.getElementById("size");
var increaseBtn = document.getElementById("increase");
var colorEl = document.getElementById("color");
var clearBtn = document.getElementById("clear");

var ctx = canvas.getContext("2d");

// Визначити розмір кола, колір та координати
let size = 10;
let isPressed = false;
color = "black";
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

// Функція малювання кола
function drawCircle(x, y) {
  ctx.beginPath();
  // Малює коло на контексті
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color; // Заповнити коло вказаним кольором
  ctx.fill(); //для заповнення фігур
}

function drawLine(x1, y1, x2, y2) {
  // Починаємо новий контур або скидаємо поточний
  ctx.beginPath();
  // Переміщення до початкової точки лінії
  ctx.moveTo(x1, y1);
  // З'єднуємо лінію з кінцевою точкою
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color; // Задаємо колір для лінії
  ctx.lineWidth = size * 2; // Задаємо товщину лінії
  ctx.stroke(); // Викликаємо метод для виконання малювання лінії на canvas
}

function increaseScreen() {
  sizeEl.innerText = size;
}

increaseBtn.addEventListener("click", () => {
  size += 5;

  if (size > 50) {
    size = 50;
  }

  increaseScreen();
});

decreaseBtn.addEventListener("click", () => {
  size -= 5;

  if (size < 5) {
    size = 5;
  }

  increaseScreen();
});

colorEl.addEventListener("change", (e) => {
  color = e.target.value;
});

clearBtn.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
