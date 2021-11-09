const quizData = [
    {
        question: "Tahun berapa Indonesia merdeka?",
        a: "1948",
        b: "1945",
        c: "1943",
        d: "1949",
        correct: "b",
    },{
        question: "Presiden Ke-5",
        a: "BJ Habibie",
        b: "Megawati Soekarno Putri",
        c: "Susilo Bambang Yudhoyono",
        d: "Abdurrahman Wahid",
        correct: "b",
    },{
        question: "Kerajaan Hindu-Budha terbesar di Indonesia?",
        a: "Majapahit",
        b: "Singaraja",
        c: "Sriwijaya",
        d: "Tarumanegara",
        correct: "a",
    },{
        question: "Berapa lama Indonesia di jajah oleh Jepang",
        a: "2 Tahun",
        b: "3 Tahun",
        c: "4 Tahun",
        d: "5 Tahun",
        correct: "b",
    },{
        question: "Berapa lama Indonesia di jajah oleh Belanda?",
        a: "350 Tahun",
        b: "450 Tahun",
        c: "200 Tahun",
        d: "250 Tahun",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionsEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswer();
    const currentQuizData = quizData[currentQuiz];

    questionsEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // Check to see answer
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].
        correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2 style="text-align: center;"> Selemat telah selesai mengerjakan quiz,Pertanyaan yang berhasil di jawab : ${score}/${quizData.length} Pertanyaan </h2>`
        }
    }
});