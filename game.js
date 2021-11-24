const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "Что нужно подарить, чтобы освободить домового эльфа Добби?",
    choice1: "Книгу",
    choice2: "Торт",
    choice3: "Носок",
    choice4: "Воздушный шар",
    answer: 3,
  },
  {
    question: "Батарейка какого типа самая маленькая?",
    choice1: "AA",
    choice2: "AAA",
    choice3: "C",
    choice4: "D",
    answer: 2,
  },
  {
    question: 'Как на древнегреческом сказать "наука о доме"?',
    choice1: "Политика",
    choice2: "Социология",
    choice3: "Риторика",
    choice4: "Экология",
    answer: 4,
  },
  {
    question: "Сколько океанов на Земле?",
    choice1: "3",
    choice2: "4",
    choice3: "2",
    choice4: "5",
    answer: 2,
  },
  {
    question: "Какой из этих телеканалов запустили позже всех?",
    choice1: "2х2",
    choice2: "СТС",
    choice3: "Nickelodeon",
    choice4: "НТВ",
    answer: 2,
  },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("/end.html");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);

  acceptingAnswers = true;
}

choices.forEach(choice => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset["number"]

    let classToApply = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
