const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonElement = document.getElementById("answer-button");

let shuffleQuestion, currentQuestionIndex;
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
function startGame() {
  startButton.classList.add("hide");
  shuffleQuestion = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hide");
  setNextQuestion();
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffleQuestion[currentQuestionIndex]);
}
function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonElement.appendChild(button);
  });
}
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffleQuestion.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Повторити";
    startButton.classList.remove("hide");
  }
}
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonElement.firstChild) {
    answerButtonElement.removeChild(answerButtonElement.firstChild);
  }
}
const questions = [
  {
    question: "Ти ідеш по дворі і бачіш альтушок з рєво і ашкуді твої дії??",
    answers: [
      { text: "Розбить їм єбальнікі", correct: true },
      { text: "Достать свій glok 17 калібр 7.5", correct: false },
      { text: "Ізнасіловать", correct: false },
      { text: "Проігнорить", correct: false },
    ],
  },
  {
    question: "Ти ідеш і бачіш як патлате чмо дойобуєця до дівчіни твої дії??",
    answers: [
      { text: "Уєбать патлате чмо", correct: false },
      { text: "Проігнорить", correct: false },
      { text: "Проігнорить", correct: false },
      { text: "Переїбать двох", correct: true },
    ],
  },
  {
    question: "x2+2x-14=0",
    answers: [
      { text: "х1=6 х2=-4", correct: false },
      { text: "Ікс один дорівнює мінус 7Ікс два дорівнює 9", correct: false },
      { text: "Я єбу", correct: true },
    ],
  },
  {
    question: "Як мене звать?",
    answers: [
      { text: "Данько", correct: false },
      { text: "Уєбан", correct: false },
      { text: "Чмо смердючє", correct: true },
      { text: "Біллі", correct: false },
      { text: "Влад", correct: false },
      { text: "Гей", correct: false },
      { text: "Нєфор", correct: false },
    ],
  },
  {
    question: "Хто з ціх тіпов пише фонк?",
    answers: [
      { text: "Stwen", correct: true },
      { text: "Саламалєйкум", correct: false },
      { text: "Я", correct: false },
      { text: "В тебе ножик давно в кадику небув?", correct: false },
    ],
  },
  {
    question: "Cкільки буде 2+2",
    answers: [
      { text: 4, correct: true },
      { text: 22, correct: false },
    ],
  },
  {
    question: "Скільки буде 2 * 2?",
    answers: [
      { text: 4, correct: true },
      { text: 8, correct: false },
    ],
  },
];
