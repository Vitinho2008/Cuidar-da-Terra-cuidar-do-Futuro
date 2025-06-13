// script.js

const questions = [
  {
    text: "O que é melhor para o meio ambiente?",
    options: [
      { text: "Separar o lixo reciclável", correct: true },
      { text: "Jogar lixo no rio", correct: false },
    ]
  },
  {
    text: "Qual atitude ajuda a economizar água?",
    options: [
      { text: "Fechar a torneira ao escovar os dentes", correct: true },
      { text: "Deixar a mangueira ligada", correct: false },
    ]
  },
  {
    text: "Quanto tempo uma garrafa PET leva para se decompor?",
    options: [
      { text: "400 anos", correct: true },
      { text: "4 dias", correct: false },
    ]
  },
  {
    text: "O que é compostagem?",
    options: [
      { text: "Reaproveitar resíduos orgânicos", correct: true },
      { text: "Misturar lixo seco com lixo molhado", correct: false },
    ]
  },
  {
    text: "Qual transporte polui menos?",
    options: [
      { text: "Bicicleta", correct: true },
      { text: "Carro sozinho", correct: false },
    ]
  },
  {
    text: "Qual material é reciclável?",
    options: [
      { text: "Papelão limpo", correct: true },
      { text: "Guardanapo sujo", correct: false },
    ]
  },
  {
    text: "Como podemos reduzir o uso de plástico?",
    options: [
      { text: "Usando sacolas reutilizáveis", correct: true },
      { text: "Pegando várias sacolas plásticas", correct: false },
    ]
  },
  {
    text: "O que é energia renovável?",
    options: [
      { text: "Solar e eólica", correct: true },
      { text: "Carvão mineral", correct: false },
    ]
  },
  {
    text: "Plantar árvores ajuda em quê?",
    options: [
      { text: "Melhorar o ar e o clima", correct: true },
      { text: "Aumentar a poluição", correct: false },
    ]
  },
  {
    text: "Qual desses é um hábito sustentável?",
    options: [
      { text: "Reutilizar potes de vidro", correct: true },
      { text: "Jogar tudo fora", correct: false },
    ]
  }
];

let currentQuestion = 0;
let correctAnswers = 0;

const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers');
const plantStages = ['stage1', 'stage2', 'stage3', 'stage4'];
const finalMessage = document.getElementById('final-message');
const correctSound = document.getElementById('correct-sound');
const wrongSound = document.getElementById('wrong-sound');
const startScreen = document.getElementById('start-screen');
const gameContainer = document.querySelector('.game-container');
const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
  startScreen.classList.add('hidden');
  gameContainer.classList.remove('hidden');
  startGame();
});

function startGame() {
  currentQuestion = 0;
  correctAnswers = 0;
  updatePlant();
  loadQuestion();
  createFallingLeaves();
}

function loadQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.text;
  answersContainer.innerHTML = '';

  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.textContent = option.text;
    btn.onclick = () => handleAnswer(option.correct);
    answersContainer.appendChild(btn);
  });
}

function handleAnswer(isCorrect) {
  if (isCorrect) {
    correctSound.play();
    correctAnswers++;
    updatePlant();
  } else {
    wrongSound.play();
  }

  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function updatePlant() {
  plantStages.forEach((id, index) => {
    const el = document.getElementById(id);
    el.style.display = (index === Math.min(correctAnswers, plantStages.length - 1)) ? 'block' : 'none';
  });
}

function showResult() {
  questionText.textContent = '';
  answersContainer.innerHTML = '';
  finalMessage.classList.remove('hidden');
}

function createFallingLeaves() {
  const container = document.getElementById('leaf-container');
  container.innerHTML = '';
  for (let i = 0; i < 20; i++) {
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leaf.style.left = `${Math.random() * 100}vw`;
    leaf.style.animationDuration = `${5 + Math.random() * 5}s`;
    leaf.style.opacity = Math.random();
    container.appendChild(leaf);
  }
}
