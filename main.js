function gradeQuiz() {
    let score = 0;

    // Correct answers
    const correctAnswers = {
        q1: "B",
        q2: "D",
        q3: "B",
        q4: "A",
        q5: "A",
        q6: "C",
        q7: "D",
        q8: "A",
        q9: "A",
        q10: "A",
        q11: "B",
        q12: "C",
        q13: "A",
        q14: "D",
        q15: "C",
        q16: "C",
        q17: "C",
        q18: "B",
        q19: "B",
        q20: "C",
        q21: "C",
        q22: "C",
        q23: "D",
        q24: "C",
        q25: "D",
        q26: "D",
        q27: "B",
        q28: "A",
        q29: "B",
        q30: "D",
        q31: "C",
        q32: "C",
        q33: "D",
        q34: "C",
        q35: "B",
        q36: "B",
        q37: "D",
        q38: "B",
        q39: "C",
        q40: "A",
        q41: "A",
        q42: "D",
        q43: "A",
        q44: "B",
        q45: "D",
        q46: "D",
        q47: "B",
        q48: "C",
        q49: "D",
        q50: "A",
        q51: "D",
        q52: "B",
        q53: "B",
        q54: "D",
        q55: "D",
        q56: "A",
        q57: "C",
        q58: "A",
        q59: "A",
        q60: "D",
        q61: "D",
        q62: "C",
        q63: "B",
        q64: "B",
        q65: "B",
        q66: "D",
        q67: "D",
        q68: "C",
        q69: "D",
        q70: "C",
        q71: "B",
        q72: "D",
        q73: "D",
        q74: "B",
        q75: "A"
    };

  // Get user answers
    const userAnswers = {};
    for (let i = 1; i <= 75; i++) {
        userAnswers[`q${i}`] = document.querySelector(`input[name="q${i}"]:checked`)?.value || '';
    }

    // Check answers and calculate score
    for (let question in correctAnswers) {
        if (userAnswers[question] === correctAnswers[question]) {
            score++;
        }
    }

    // Display result
    const totalQuestions = Object.keys(correctAnswers).length;
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `You scored ${score} out of ${totalQuestions}`;
}
