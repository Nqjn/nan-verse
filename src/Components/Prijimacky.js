function Prijimacky() {
    return (
      <div className="container">
        <h1>Rozšířený matematický kvíz</h1>
        <div id="quiz"></div>
        <style jsx>{`
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
          }
          .container {
            max-width: 800px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
          }
          h1 {
            text-align: center;
            color: #333;
          }
          .question {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
            padding-bottom: 15px;
          }
          input[type="text"] {
            width: 100%;
            padding: 8px;
            margin-top: 5px;
          }
          button {
            display: block;
            width: 100%;
            padding: 10px;
            background: #333;
            color: #fff;
            border: none;
            cursor: pointer;
            margin-top: 10px;
          }
          .feedback {
            margin-top: 10px;
            padding: 10px;
            background: #e6e6e6;
            border-radius: 5px;
          }
          .correct {
            color: green;
          }
          .incorrect {
            color: red;
          }
        `}</style>
        <script dangerouslySetInnerHTML={{ __html: `
          const questions = [
            {
              question: "Řešte rovnici: (x + (1/2)*x)*2 = (x + (1/6)*x)*2 + 6",
              answer: "9",
              explanation: "Roznásobíme vše, poté obě strany vynásobíme jmenovatelem zlomků"
            },
            {
              question: " 1/2(x + 2) - (x - 2)² = 6 - x²",
              answer: "2",
              explanation: "Roznásobíme vše, poté obě strany vynásobíme jmenovatelem zlomků"
            },
          ];
          const quizContainer = document.getElementById('quiz');
          questions.forEach((q, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.classList.add('question');
            questionDiv.innerHTML = \`
              <p>\${index + 1}. \${q.question}</p>
              <input type="text" id="answer\${index}" placeholder="Vaše odpověď">
              <button onclick="checkAnswer(\${index})">Zkontrolovat</button>
              <div id="feedback\${index}" class="feedback"></div>
            \`;
            quizContainer.appendChild(questionDiv);
          });
          function checkAnswer(index) {
            const userAnswer = document.getElementById(\`answer\${index}\`).value.trim();
            const feedback = document.getElementById(\`feedback\${index}\`);
            
            if (userAnswer.toLowerCase() === questions[index].answer.toLowerCase()) {
              feedback.innerHTML = \`<span class="correct">Správně!</span>\`;
            } else {
              feedback.innerHTML = \`<span class="incorrect">Nesprávně. </span>\`;
              feedback.innerHTML += \`<br>Vysvětlení: \${questions[index].explanation}\`;
            }
          }
        ` }} />
      </div>
    );
  }
  
  export default Prijimacky;