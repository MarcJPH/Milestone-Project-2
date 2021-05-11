console.log("Script working?");
//To send comments and feedback from the form in the Contact Us link
//to email using EmailJS.
function sendMail(contactForm) {
    emailjs.send("service_f8z2kxb", "template_06puzpp", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "comments": contactForm.comments.value
    })
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
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
        game_1: 'Question 1',
        question: 'How do you say hello in Spanish?',
        image: 'assets/images/hello.jpg',
        options: [{
            option1: 'Adios',
        },
        {
            option2: 'Hola',
        },
        {   
            option3: 'Bueno'
        }
    ],        
        answer: "option2"
    },

    {
        game_2: 'Question 2',
        question: 'What is Spanish for bicycle',
        image: 'tbc.jpg',
        options: {
            option1: 'Bike',
            
            option2: 'Scooter',
            
            option3: 'Tricycle'
        },
        answer: "option1"
    },
];
let currentQuestion = 0;


//Generate questions to the HTML page//
function generateQuestions() {
    for (let i = 0; i < questions.length; i++) {

        let q = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = `<h2> ${q.game_1}</h2>`;
        document.getElementById('question').innerHTML = `<h3> ${q.question} </h3>`;

        var img = document.createElement("img");
        img.src = "assets/images/hello.jpg";
        var src = document.getElementById("image");
        src.appendChild(img);

        document.getElementById('option1').innerHTML = `<h2> ${q.options[0].option1}</h2>`;
        document.getElementById('option2').innerHTML = `<h2> ${q.options[1].option2}</h2>`;
        document.getElementById('option3').innerHTML = `<h2> ${q.options[2].option3}</h2>`;

    }
}

function checkAnswer() {

}


function addScore() {
    let oldScore = parseInt(document.getElementById("q-correct").innerText);
    document.getElementById("q-correct").innerText = ++oldScore;
}


function getPlayerScore() {

}



