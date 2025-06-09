let questions = [
    {
        question: 'Which is the smallest continent in the world',
        answer: [
            { text: 'Asia', correct: false },
            { text: 'Australia', correct: true },
            { text: 'Arctic', correct: false },
            { text: 'Africa', correct: false }
        ]
    },
    {
        question: 'Which is the largest desert in the world',
        answer: [
            { text: 'Kalahari', correct: false },
            { text: 'Gobi', correct: true },
            { text: 'Sahara', correct: false },
            { text: 'Antartica', correct: ture }
        ]
    },
    {
        question: 'What is the capital of Australia?',
        answer: [
            { text: 'Sydney', correct: false },
            { text: 'Melbourne', correct: false },
            { text: 'Canberra', correct: true },
            { text: 'Brisbane', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answer: [
            { text: 'Earth', correct: false },
            { text: 'Jupiter', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Venus', correct: false }
        ]
    },
    {
        question: 'Who wrote the play "Romeo and Juliet"?',
        answer: [
            { text: 'William Wordsworth', correct: false },
            { text: 'William Shakespeare', correct: true },
            { text: 'Charles Dickens', correct: false },
            { text: 'Jane Austen', correct: false }
        ]
    },
    {
        question: 'Which is the longest river in the world?',
        answer: [
            { text: 'Amazon', correct: false },
            { text: 'Yangtze', correct: false },
            { text: 'Mississippi', correct: false },
            { text: 'Nile', correct: true }
        ]
    }
];

const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-btn');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function starQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + '. ' + currentQuestion.question;
}