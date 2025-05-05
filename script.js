
const stations = [
  {
    title: "معادلات القوى",
    questions: [
      { q: "3^x = 27", a: "3" },
      { q: "2^{x + 1} = 16", a: "3" },
      { q: "5^{2x - 1} = 125", a: "2" }
    ]
  },
  {
    title: "معادلات كسرية متعددة الحدود",
    questions: [
      { q: "\frac{x + 2}{x - 1} = 3", a: "2.5" },
      { q: "\frac{x}{x + 1} + \frac{2}{x + 1} = 1", a: "0" }
    ]
  },
  {
    title: "معادلات جذرية",
    questions: [
      { q: "\sqrt{x + 4} = 6", a: "32" },
      { q: "\sqrt{2x - 1} + 3 = 7", a: "8.5" }
    ]
  }
];

let currentStation = 0;
let currentQuestion = 0;

function showQuestion() {
  const station = stations[currentStation];
  const question = station.questions[currentQuestion];
  document.getElementById("station-title").textContent = station.title;
  document.getElementById("question").textContent = `المعادلة: ${question.q}`;
  document.getElementById("answer").value = "";
  MathJax.typesetPromise();
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correctAnswer = stations[currentStation].questions[currentQuestion].a;
  if (userAnswer === correctAnswer) {
    currentQuestion++;
    if (currentQuestion >= stations[currentStation].questions.length) {
      currentStation++;
      currentQuestion = 0;
      if (currentStation >= stations.length) {
        document.body.innerHTML = '<div class="container"><h1>تهانينا، لقد وصلت إلى كنز الرياضيات!</h1><h2>Congratulation, you made it to the The treasure of mathematics!</h2></div>';
        return;
      }
    }
    showQuestion();
  } else {
    alert("إجابة غير صحيحة، حاول مرة أخرى");
  }
}

window.onload = showQuestion;
