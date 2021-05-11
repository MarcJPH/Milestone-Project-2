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
        question: 'What does bicicleta mean in English?',
        image: 'assets/images/bicycle.jpg',
        options: {
            option1: 'Bicycle',

            option2: 'Bucket',

            option3: 'Balloon'
        },
        answer: "option1"
    },

    {
        game_3: 'Question 3',
        question: 'How do you say guitar in Spanish?',
        image: 'assets/images/guitar.jpg',
        options: {
            option1: 'Getafe',

            option2: 'Gorila',

            option3: 'Guitarra'
        },
        answer: "option3"
    },

   {
        game_3: 'Question 4',
        question: 'What does perro mean in English?',
        image: 'assets/images/dog.jpg',
        options: {
            option1: 'Dog',

            option2: 'Cat',

            option3: 'Parrot'
        },
        answer: "option1"
    },
    
    {
        game_3: 'Question 5',
        question: 'What does playa mean in English?',
        image: 'assets/images/beach.jpg',
        options: {
            option1: 'Plant',

            option2: 'Party',

            option3: 'Beach'
        },
        answer: "option3"
    },

    {
        game_3: 'Question 6',
        question: 'What is the colour red in Spanish?',
        image: 'tbc.jpg',
        options: {
            option1: 'Blanco',

            option2: 'Rojo',

            option3: 'Lluvia'
        },
        answer: "option2"
    },

    {
        game_3: 'Question 7',
        question: 'What is sun in Spanish?',
        image: 'tbc.jpg',
        options: {
            option1: 'Sol',

            option2: 'Sello',

            option3: 'Bote'
        },
        answer: "option1"
    },

    {
        game_3: 'Question 8',
        question: 'What does flor mean in English?',
        image: 'tbc.jpg',
        options: {
            option1: 'Flower',

            option2: 'Car',

            option3: 'Foot'
        },
        answer: "option1"
    },

    {
        game_3: 'Question 9',
        question: 'What is hat in Spanish?',
        image: 'tbc.jpg',
        options: {
            option1: 'Sandalias',

            option2: 'Calcetines',

            option3: 'Sombrero'
        },
        answer: "option3"
    },

    {
        game_3: 'Question 10',
        question: 'What does amigo mean in English?',
        image: 'tbc.jpg',
        options: {
            option1: 'Auntie',

            option2: 'Friend',

            option3: 'Apple'
        },
        answer: "option2"
    }
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



