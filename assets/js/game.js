console.log("Working?")



//An array of questions that will be loaded onto the game_page.html

const questions = [
    {
        game_1: 'One',
        question: 'How do you say hello in Spanish?',
        image: 'tbc.jpg',
        options: ['Adios', 'Hola', 'Bueno'],
    },

    {
        game_2: 'Two',
        question: 'What is Spanish for bicycle',
        image: 'tbc.jpg',
        options: []
    },
];


function runGame() {

}

let myButton = document.getElementById('play-game');
myButton.addEventListener('click', generateQuestions);


//Generate questions to the HTML page//
function generateQuestions () {
    for (let i = 0; i < questions.length; i++) {

    let q = questions[currentQuestion];
    
        document.getElementById('question').innerHTML = `<h3> ${q.question} </h3>`;
    }
}

function checkAnswer() {

}


function addScore() {

}


function getPlayerScore() {

}



//`<h3> ${q.question} </h3>`
//let q = questions[0];

