console.log("Script working?");
//To send comments and feedback from the form in the Contact Us link
//to email using EmailJS.
function sendMail(contactForm) {
    emailjs.send("service_f8z2kxb","template_06puzpp", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "comments": contactForm.comments.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false; // To block from loading a new page
}


function playerName() {

}

function playerAge() {

}




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
let currentQuestion = 0;


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

