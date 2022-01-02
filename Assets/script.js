
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");

// Quiz question object
var quizQuestions = [{
    
    question: "Question 1: Which of the following is true about variable naming conventions in JavaScript?",
    choiceA:"You should not use any of the JavaScript reserved keyword as variable name", 
    choiceB: "JavaScript variable names should not start with a numeral (0-9)",
    choiceC:"Both of the above",
    choiceD:"None of the above",
    correctAnswer: "c"},
   {
    question: "Question 2: What method copies enumerable and own properties from a source object to a target object?",
    choiceA:"Object.map()",
    choiceB:"Object.assign()",
    choiceC :"Object.copy()", 
    choiceD:"Object.duplicate()",
    correctAnswer: "b"},
    {
        question: "Question 3: What method returns an array of a given object's own enumerable string-keyed property?",
        choicesA:"Object.keys()",
        choiceB:"Object.value)", 
        choiceC:"Object.entries)",
        choiceD:"Object.properties()",
        correctAnswer: "c"},
        {
        question: "What HTML tags are JavaScript code wrapped in?",
        choiceA: "&lt;div&gt;",
        choiceB: "&lt;link&gt;",
        choiceC: "&lt;head&gt;",
        choiceD: "&lt;script&gt;",
        correctAnswer: "d"},
        {
        question: "When is localStorage data cleared?",
        choiceA: "No expiration time",
        choiceB: "On page reload",
        choiceC: "On browser close",
        choiceD: "On computer restart",
        correctAnswer: "a"},  
    ];
    

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;


