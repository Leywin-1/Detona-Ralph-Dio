// --- SELEÇÃO DOS ELEMENTOS DO JOGO (DOM) ---
const squares = document.querySelectorAll(".square");
const timeLeftDisplay = document.querySelector(".menu-time .numbers");
const scoreDisplay = document.querySelector(".menu-score .numbers");
const livesDisplay = document.querySelector(".menu-live .numbers");

// --- VARIÁVEIS DE ESTADO DO JOGO ---
let score = 0;
let lives = 3;
let timeLeft = 30;
let ralphPosition = null;
let gameTimerId = null;
let countdownTimerId = null;

// --- ÁUDIO DO JOGO ---
const hitSound = new Audio("./src/sounds/hit.m4a");
// ADIÇÃO 1: Ajusta o volume do efeito sonoro para 20% (opcional, mas recomendado).
hitSound.volume = 0.2;

/**
 * Função principal que inicia ou reinicia uma rodada do jogo.
 */
function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = timeLeft;
  livesDisplay.textContent = `x${lives}`;
  gameTimerId = setInterval(moveRalphRandomly, 700);
  countdownTimerId = setInterval(countdown, 1000);
}

/**
 * Função que move o Ralph para um 'square' aleatório.
 */
function moveRalphRandomly() {
  squares.forEach((square) => {
    square.classList.remove("enemy");
  });
  const randomIndex = Math.floor(Math.random() * 9);
  const randomSquare = squares[randomIndex];
  randomSquare.classList.add("enemy");
  ralphPosition = randomSquare.id;
}

/**
 * Função que controla o contador de tempo regressivo.
 */
function countdown() {
  timeLeft--;
  timeLeftDisplay.textContent = timeLeft;
  if (timeLeft <= 0) {
    gameOver();
  }
}

/**
 * Função chamada quando o tempo de uma rodada acaba.
 */
function gameOver() {
  clearInterval(gameTimerId);
  clearInterval(countdownTimerId);
  lives--;  
  livesDisplay.textContent = `x${lives}`;
  if (lives <= 0) {
    alert(`Fim de Jogo! Sua pontuação final foi: ${score}. Recarregue a página para jogar novamente.`);
  } else {
    alert(`Tempo esgotado! Sua pontuação foi: ${score}. Prepare-se para a próxima rodada.`);
    createContinueButton();
  }
}

/**
 * Cria e exibe o botão "Continuar" na tela.
 */
function createContinueButton() {
    const mainPanel = document.querySelector(".panel");
    const continueButton = document.createElement("button");
    continueButton.textContent = "Continuar";
    continueButton.className = "continue-button";
    continueButton.addEventListener('click', () => {
        mainPanel.removeChild(continueButton);
        startGame();
    });
    mainPanel.appendChild(continueButton);
}


// --- EVENT LISTENERS (OUVINTES DE EVENTOS) ---
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === ralphPosition) {
      score++;
      scoreDisplay.textContent = score;
      
      // ADIÇÃO 2: Rebobina o som para o início antes de tocar.
      hitSound.currentTime = 0;
      hitSound.play();

      ralphPosition = null; 
    }
  });
});

// --- INÍCIO DO JOGO ---
startGame();