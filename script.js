
const stages = [
  {
    title: "معادلات القوى",
    questions: [
      { q: "3^x = 27", a: "3" },
      { q: "2^(x + 1) = 16", a: "3" },
      { q: "5^(2x - 1) = 125", a: "2" }
    ]
  },
  {
    title: "معادلات كسرية متعددة الحدود",
    questions: [
      { q: "(x + 2)/(x - 1) = 3", a: "2.5" },
      { q: "x/(x + 1) + 2/(x + 1) = 1", a: "-1" }
    ]
  },
  {
    title: "معادلات جذرية",
    questions: [
      { q: "√(x + 4) = 6", a: "32" },
      { q: "√(2x - 1) + 3 = 7", a: "9" }
    ]
  }
];

let currentStage = 0;
let currentQuestion = 0;

function showQuestion() {
  const stage = stages[currentStage];
  const qObj = stage.questions[currentQuestion];
  document.getElementById("stage").innerHTML = `
    <h2>${stage.title}</h2>
    <p>${qObj.q}</p>
    <input type="text" id="answer" placeholder="الإجابة" />
    <br/>
    <button onclick="checkAnswer()">تحقق</button>
  `;
  document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correct = stages[currentStage].questions[currentQuestion].a;
  if (userAnswer === correct) {
    document.getElementById("feedback").innerText = "✔️ إجابة صحيحة";
    currentQuestion++;
    if (currentQuestion >= stages[currentStage].questions.length) {
      currentStage++;
      currentQuestion = 0;
      if (currentStage >= stages.length) {
        document.getElementById("stage").innerHTML = `
          <h2>🎉 Congratulation, you made it to the The treasure of mathematics!</h2>
          <h3>🎉 تهانينا، لقد وصلت إلى كنز الرياضيات!</h3>
        `;
        document.getElementById("feedback").innerText = "";
        return;
      }
    }
    setTimeout(showQuestion, 1000);
  } else {
    document.getElementById("feedback").innerText = "❌ حاول مرة أخرى";
  }
}

window.onload = showQuestion;
