let questions = [
    {
        question: "Html Stands For _______________________",
        options: ["Hyper Text Makeup Language",
            "html",
            "Case Cading Style Sheet",
            "Hypertext markup language"
        ],
        correctAns: "Hypertext markup language",
    },
    {
        question: "Css Stands For _______________________",
        options: [
            "Casecading Style Sheet",
            "Java",
            "Ram",
            "Hypertext markup language"
        ],
        correctAns: "Casecading Style Sheet",
    },
    {
        question: "Js Stands For _______________________",
        options: [
            "Java Style",
            "Java Script",
            "Script",
            "Script Src"
        ],
        correctAns: "Java Script",
    },
    {
        question: "Dom Stands For _______________________",
        options: [
            "Document Object Model",
            "html",
            "Css",
            "Java"
        ],
        correctAns: "Document Object Model",
    },
    {
        question: "Ram Stands For _______________________",
        options: [
            "Read Only Memory",
            "Dom",
            "Random Acccess Memory",
            "For Pc"
        ],
        correctAns: "Random Acccess Memory",
    },
    {
        question: "Rom Stands For _______________________",
        options: [
            "Hyper Text Markup Language",
            "html",
            "HTml",
            "Read Only Memory"
        ],
        correctAns: "Read Only Memory",
    },
];
// Questions Section
let totalQuest = document.getElementById('totalQuest');
totalQuest.innerText = questions.length;
let questionRender = document.getElementById('quest')
let currentQuestNum = document.getElementById('currentQuestNum');
let currentIndex = 0;
let marks = 0;
let questionOption = document.getElementById('btnDiv')//.firstElementChild
let mainDiv = document.getElementById('main');

// Result Section

let resultDiv = document.getElementById('result');
let resultMarks = document.getElementById('marks');
let percent = document.getElementById('percentage');
let grade = document.getElementById('grade');
let status = document.getElementById('status');
let totalMarks = questions.length;

function showQuest() {
    questionRender.innerText = questions[currentIndex].question;
    currentQuestNum.innerText = currentIndex + 1;
    questionOption.innerHTML = ''
    for (let i = 0; i < questions[currentIndex].options.length; i++) {
        questionOption.innerHTML += `
        <button onclick = "checkAns('${questions[currentIndex].options[i]}','${questions[currentIndex].correctAns}')">${questions[currentIndex].options[i]}</button>
    
    `
    }
}
showQuest()

function result() {

    if (currentIndex + 1 == questions.length) {
        // console.log("done");
        mainDiv.style.display = 'none';
        resultDiv.style.display = "flex"
        // mainDiv.style.background="green";
        resultMarks.innerHTML = `MARKS : ${marks + 1}`; 
        let percentage = (marks + 1) / totalMarks * 100 
        percent.innerHTML = `PERCENTAGE : ${percentage}`;
        console.log(percent.innerHTML, typeof percent.innerHTML);
        console.log(percentage)

        if (percentage > 45) {

            grade.innerHTML = "A";
            console.log('aaaaaaaaaa')
        }
        else if (percentage <= 79 || percentage >= 40) {
            grade.innerHTML = "B"

        }
        else if (percentage <= 39) {
            grade.innerText = 'C'

        }
    }
    else {
        currentIndex++
        showQuest()
    }


}


function checkAns(a, b) {
    if (a == b) {
        marks++;
    }
    result()
    console.log(marks)
}



function restart() {

    currentIndex = 0;
    marks = 0;
    resultDiv.style.display = 'none'; 
    mainDiv.style.display = "block" 
    showQuest();
}