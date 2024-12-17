
const questions = {
    html: [
        { question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlink Text Markup Language", "Hyper Text Management Language"], correct: 0 },
        { question: "Which tag is used to create a hyperlink in HTML?", answers: ["<a>", "<link>", "<hyperlink>", "<href>"], correct: 0 },
        { question: "Which tag is used to display an image?", answers: ["<img>", "<image>", "<picture>", "<photo>"], correct: 0 },
        { question: "True or False: The <img> tag requires a closing tag.", answers: ["True", "False", "Not Required", "Depends on context"], correct: 1, type: "true-false" },
        { question: "Which of the following is a valid HTML5 doctype?", answers: ["<!DOCTYPE html>", "<!DOCTYPE HTML5>", "<!DOCTYPE html5>", "<DOCTYPE HTML>"], correct: 0 }
    ],
    css: [
        { question: "What does CSS stand for?", answers: ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Cascading Sheet Styles"], correct: 0 },
        { question: "Which property controls the text size in CSS?", answers: ["font-size", "text-size", "font-style", "font-height"], correct: 0 },
        { question: "True or False: The 'display' property in CSS controls the layout of an element.", answers: ["True", "False", "Depends on browser", "Only for flexbox"], correct: 0, type: "true-false" },
        { question: "Which of the following is used to create space between elements in CSS?", answers: ["margin", "padding", "spacing", "border"], correct: 0 },
        { question: "How do you change the background color of an element in CSS?", answers: ["background-color", "color", "bg-color", "background"], correct: 0 },
        { question: "What CSS property is used to change the font of an element?", answers: ["font-family", "font-size", "font-style", "font-weight"], correct: 0 },
        { question: "True or False: The 'z-index' property determines the stacking order of elements.", answers: ["True", "False", "Only for images", "Only for divs"], correct: 0, type: "true-false" },
        { question: "Which property is used to set the distance between text and its surrounding element in CSS?", answers: ["padding", "margin", "border", "spacing"], correct: 0 },
        { question: "Which of the following is used to apply CSS styles to all paragraphs in a document?", answers: ["p { }", "paragraph { }", ".p { }", "#p { }"], correct: 0 },
        { question: "True or False: CSS can be used to control the layout and positioning of elements on a webpage.", answers: ["True", "False", "Only for positioning", "Only for mobile design"], correct: 0, type: "true-false" }
    ],

    js: [
        { question: "What does JavaScript do in web development?", answers: ["Adds interactivity", "Manages server-side functions", "Styles the webpage", "None of the above"], correct: 0 },
        { question: "Which keyword declares a variable in JavaScript?", answers: ["var", "let", "const", "All of the above"], correct: 3 },
        { question: "True or False: JavaScript is used only for client-side development.", answers: ["True", "False", "Only for websites", "Only for web apps"], correct: 1, type: "true-false" },
        { question: "Which method is used to output data to the console in JavaScript?", answers: ["console.log()", "print()", "echo()", "output()"], correct: 0 },
        { question: "How do you write a comment in JavaScript?", answers: ["// This is a comment", "# This is a comment", "<!-- This is a comment -->", "/* This is a comment */"], correct: 0 },
        { question: "What symbol is used to indicate a comment in JavaScript?", answers: ["//", "/*", "#", "<!--"], correct: 0 },
        { question: "Which of the following is NOT a valid data type in JavaScript?", answers: ["String", "Integer", "Array", "Object"], correct: 1 },
        { question: "True or False: In JavaScript, arrays can hold different types of data.", answers: ["True", "False", "Only strings", "Only numbers"], correct: 0, type: "true-false" },
        { question: "Which method is used to convert a string to an integer in JavaScript?", answers: ["parseInt()", "toInteger()", "parseFloat()", "convert()"], correct: 0 },
        { question: "True or False: Functions in JavaScript can be passed as arguments to other functions.", answers: ["True", "False", "Only for built-in functions", "Only for anonymous functions"], correct: 0, type: "true-false" }
    ],
    java: [
        { question: "What does JVM stand for?", answers: ["Java Virtual Machine", "Java Version Manager", "Java Variable Method", "None of the above"], correct: 0 },
        { question: "Which of the following is the correct syntax for the main method in Java?", answers: ["public static void main(String[] args)", "public void main(String[] args)", "public main(String[] args)", "void main(String[] args)"], correct: 0 },
        { question: "True or False: Java is a statically typed language.", answers: ["True", "False", "Depends on the version", "Only in specific cases"], correct: 0, type: "true-false" },
        { question: "Which of the following is used to create an object in Java?", answers: ["new", "create", "object", "instantiate"], correct: 0 },
        { question: "Which of the following is a valid Java data type?", answers: ["int", "float", "double", "All of the above"], correct: 3 },
        { question: "True or False: In Java, the 'String' class is a primitive data type.", answers: ["True", "False", "String is a custom class", "String is an object"], correct: 1, type: "true-false" },
        { question: "What does the 'public' keyword in Java indicate?", answers: ["The class can be accessed from anywhere", "The class can only be accessed within its package", "The class can only be accessed from the same project", "None of the above"], correct: 0 },
        { question: "What is the default value of an uninitialized local variable in Java?", answers: ["0", "null", "undefined", "No default value"], correct: 3 },
        { question: "Which method is used to get the length of a string in Java?", answers: ["length()", "size()", "getLength()", "getSize()"], correct: 0 },
        { question: "True or False: In Java, a constructor is used to initialize an object.", answers: ["True", "False", "Only for classes", "Only for subclasses"], correct: 0, type: "true-false" }
    ], python: [
        { question: "What does Python use for indentation?", answers: ["Spaces", "Tabs", "Both spaces and tabs", "None of the above"], correct: 0 },
        { question: "Which of the following is a valid Python data type?", answers: ["list", "dictionary", "tuple", "All of the above"], correct: 3 },
        { question: "True or False: Python uses curly braces {} for defining code blocks.", answers: ["True", "False", "Only in functions", "Only in loops"], correct: 1, type: "true-false" },
        { question: "Which of the following is used to define a function in Python?", answers: ["def", "function", "func", "define"], correct: 0 },
        { question: "Which operator is used for exponentiation in Python?", answers: ["^", "**", "exp", "pow"], correct: 1 },
        { question: "What will the following Python code output? print(3 * 'Python')", answers: ["PythonPythonPython", "3Python", "Python3", "None of the above"], correct: 0 },
        { question: "True or False: In Python, the 'None' keyword represents a null value.", answers: ["True", "False", "None is a variable", "None is a string"], correct: 0, type: "true-false" },
        { question: "Which method is used to add an element to the end of a list in Python?", answers: ["append()", "add()", "insert()", "push()"], correct: 0 },
        { question: "Which of the following is used to create a comment in Python?", answers: ["//", "#", "/*", "<!--"], correct: 1 },
        { question: "True or False: Python supports multiple inheritance.", answers: ["True", "False", "Only single inheritance", "Multiple inheritance is not recommended"], correct: 0, type: "true-false" }
    ]

};

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let incorrectAnswers = [];

function chooseQuiz(type) {
    selectedQuestions = questions[type];
    document.getElementById('selection-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';
    startGame();
}

function getHighestScore() {
    return localStorage.getItem('highestScore') || 0;
}

function setHighestScore(newScore) {
    const highestScore = getHighestScore();
    if (newScore > highestScore) {
        localStorage.setItem('highestScore', newScore);
    }
}

function startGame() {
    score = 0;
    currentQuestionIndex = 0;
    incorrectAnswers = [];
    showQuestion();
}

function showQuestion() {
    const questionData = selectedQuestions[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;
    const answersElement = document.getElementById('answers');
    answersElement.innerHTML = '';

    questionData.answers.forEach((answer, index) => {
        const button = document.createElement('div');
        button.classList.add('answer');
        button.textContent = answer;
        button.onclick = () => selectAnswer(index);
        answersElement.appendChild(button);
    });
}

function selectAnswer(index) {
    const questionData = selectedQuestions[currentQuestionIndex];
    const answerButtons = document.querySelectorAll('.answer');

    if (index === questionData.correct) {
        score++;
        answerButtons[index].classList.add('correct');
    } else {
        incorrectAnswers.push({
            question: questionData.question,
            correctAnswer: questionData.answers[questionData.correct]
        });
        answerButtons[index].classList.add('incorrect');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < selectedQuestions.length) {
            showQuestion();
        } else {
            endGame();
        }
    }, 1000);
}

function endGame() {
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('end-screen').style.display = 'block';
    document.getElementById('score').textContent = `Your Score: ${score}`;
    setHighestScore(score);

    const answersList = document.getElementById('correct-answers-list');
    answersList.innerHTML = '';

    incorrectAnswers.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.question} - Correct Answer: ${item.correctAnswer}`;
        answersList.appendChild(listItem);
    });
}

function restartGame() {
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('selection-screen').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('highest-score').textContent = `Highest Score: ${getHighestScore()}`;
});
