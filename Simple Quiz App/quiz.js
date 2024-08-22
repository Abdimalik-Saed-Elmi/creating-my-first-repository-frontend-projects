const questions = [
    {
        question: "Forex waa suuq online oo...",
        answers : [
            {text: "Qasaaro badan", correct: false},
            {text: "Faa'ido kaliya ah", correct: false},
            {text: "Qasaaro iyo Faaido leh", correct: true},
            {text: "La'isku dhaco", correct: false}
        ]
    },
    {
        question: "Forex waa suuq online oo...",
        answers : [
            {text: "Qasaaro iyo Faaido leh", correct: true},
            {text: "Qasaaro badan", correct: false},
            {text: "Faa'ido kaliya ah", correct: false},
            {text: "La'isku dhaco", correct: false}
        ]
    },
    {
        question: "Forex waa suuq online oo...",
        answers : [
            {text: "Qasaaro badan", correct: false},
            {text: "Faa'ido kaliya ah", correct: false},
            {text: "La'isku dhaco", correct: false},
            {text: "Qasaaro iyo Faaido leh", correct: true}
        ]
    },
    {
        question: "Forex waa suuq online oo...",
        answers : [
            {text: "Qasaaro badan", correct: false},
            {text: "Qasaaro iyo Faaido leh", correct: true},
            {text: "Faa'ido kaliya ah", correct: false},
            {text: "La'isku dhaco", correct: false}
        ]
    }
];

const questiontag = document.getElementsByClassName ('Quiz')
const answerbtn = document.getElementsByClassName ('ansbtns')
const nextbtn = document.getElementsByClassName ('nextbtn')

var currentquestionindex = 0;
var score = 0;

function Startquiz(){
     currentquestionindex = 0;
     score = 0;
    nextbtn.innerHTML = "Next";
    ShowQuestion();
}

function ShowQuestion(){
    resetstate();
    var currentquestion = questions[currentquestionindex]
    var questionNO = currentquestionindex + 1;
    questiontag.innerHTML = questionNO + "." + currentquestion.question;

    currentquestion.answers.forEach(answer =>{
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerbtn.appendChild(button);
    })
}

function resetstate(){
    nextbtn.style.display = "none"
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}
Startquiz();

