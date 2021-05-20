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

//Function to close the modal after submitting feedback and to provide alert to user.

$(".submit").click(function () {
    $("#contactmodal").modal('hide');
    alert("Thank you for sending your feedback. All comments are welcomed as we strive to improve our game.")
});


//An array of questions that will be loaded onto the game_page.html

const questions = [
    {
        question: "How do you say hello in Spanish?",
        image: "assets/images/hello.jpg",
        choices: ["Adios", "Hola", "Bueno"],
        answer: "Hola"
    },
    {
        question: "What does bicicleta mean in English?",
        image: "assets/images/bicycle.jpg",
        choices: ["Bicycle", "Bucket", "Balloon"],
        answer: "Bicycle"
    },
    {
        question: "How do you say guitar in Spanish?",
        image: "assets/images/guitar.jpg",
        choices: ["Getafe", "Gorila", "Guitarra"],
        answer: "Guitarra"
    },
    {
        question: "What does perro mean in English?",
        image: "assets/images/dog.jpg",
        choices: ["Dog", "Cat", "Parrot"],
        answer: "Dog"
    },

    {
        question: "What does playa mean in English?",
        image: "assets/images/beach.jpg",
        choices: ["Plant", "Party", "Beach"],
        answer: "Beach"
    },
    {
        question: "What is the colour red in Spanish?",
        image: 'tbc.jpg',
        choices: ["Blanco", "Rojo", "Lluvia"],
        answer: "Rojo"
    },
    {
        question: "What is sun in Spanish?",
        image: 'tbc.jpg',
        choices: ["Sol", "Sello", "Bote"],
        answer: "Sol"
    },
    {
        question: "What does flor mean in English?",
        image: 'tbc.jpg',
        choices: ["Flower", "Car", "Foot"],
        answer: "Flower"
    },
    {
        question: "What is hat in Spanish?",
        image: 'tbc.jpg',
        choices: ["Sandalias", "Calcetines", "Sombrero"],
        answer: "Sombrero"
    },
    {
        question: "What does amigo mean in English?",
        image: 'tbc.jpg',
        choices: ["Auntie", "Friend", "Apple"],
        answer: "Friend"
    },
    {
        question: "What is dad in Spanish?",
        image: 'tbc.jpg',
        choices: ["Papa", "Mama", "Abuelo"],
        answer: "Papa"
    },
    {
        question: "What does el colegio mean in English?",
        image: 'tbc.jpg',
        choices: ["Car", "Cucumber", "School"],
        answer: "School"
    },
    {
        question: "What does el futbol mean in English?",
        image: 'tbc.jpg',
        choices: ["Farm", "Football", "Fun"],
        answer: "Football"
    },
    {
        question: "What is ice-cream in Spanish?",
        image: 'tbc.jpg',
        choices: ["El Elardo", "La Hamburguesa", "La Paella"],
        answer: "El Elardo"
    },
    {
        question: "What is yes in Spanish?",
        image: 'tbc.jpg',
        choices: ["Oui", "Pea", "Si"],
        answer: "Si"
    }
];

let score = 0;

const BUTTONS_CONTAINER = document.getElementById("buttons");

// Loop through all the questions above and create a div with the question and
// multiple choice buttons for 10 random questions.
for (var index = questions.length - 1; index > 0; index--) {
    var rndIndex = Math.floor(Math.random() * (index + 1));
    var questionsTemp = questions[rndIndex];
    questions[rndIndex] = questions[index];
    questions[index] = questionsTemp;
}
var getRandomQuestions = questions.slice(0, 10);
console.log(getRandomQuestions);

for (let question of getRandomQuestions) {
    let questionDiv = document.createElement("div");
    questionDiv.classList.add("question-container");
    questionDiv.dataset.image = question.image;

    //Source the question text from the array
    //and add it to the question div.
    let questionText = document.createElement("p");
    questionText.classList.add("question-text");
    questionText.innerHTML = question.question;
    questionDiv.appendChild(questionText);

    //Add the image for the questions.

    //var img = new Image();
    //img.src = question.image;
    //img.style.width = '200px';
    //img.style.height = '200px';

    //document.getElementById('question-container').appendChild(img);

    //let imageView = document.createElement("img");
    //imageView.classList.add("images");
    //imageView.innerHTML = (src = question.image);
    //questionDiv.appendChild(imageView);

    //images.addEventListener('mouseover', imageIn);
    //document.getElementsById("question-text").addEventListener('mouseout', imageOut);


    //function imageIn(event) {
    //console.log('You moved the mouse over the div!\n');
    //}

    // Show the multiple choice answers. Each choice is a button that has the choice as its text
    // but also a data property with the actual answer, to be used in grading below.
    // The grading function is triggered when the button is clicked.
    for (let choice of question.choices) {
        // Generate a button for the current spanish word choice.
        let button = generateAnswerButton(choice, question.answer);

        questionDiv.appendChild(button);
    }

    BUTTONS_CONTAINER.appendChild(questionDiv);
}

/* Given a word in Spanish, generate button that displays that word.
The button also has a data attribute with the same word.
@param {string} spanishWord - The Spanish word to display on the button.
@returns {HTMLElement} - The button object described above.
*/
function generateAnswerButton(spanishWordOnButton, answer) {
    let button = document.createElement("button");

    // <button data-word="Hola" data-correct-answer="Adios">Hola</button>
    button.innerHTML = spanishWordOnButton;

    // Make a data attribute with the Spanish word

    button.dataset.word = spanishWordOnButton;

    // Add an attribute with the correct answer for this question.
    button.dataset.correctAnswer = answer;

    // Make the button trigger the grading function below when clicked.
    button.addEventListener("click", gradeQuestion);

    return button;
}

/* Event listener for answer buttons. Validate whether the answer chosen is correct or not.
and display a message to the user.
@param {Event} - The fired event.
*/

function gradeQuestion(evt) {
    // The object that triggered the event.
    let clickedButton = evt.target;

    // The word on the button, which is encoded in data-word (see generateAnswerButton above)
    let buttonWord = clickedButton.dataset.word;
    let correctAnswer = clickedButton.dataset.correctAnswer;

    if (buttonWord === correctAnswer) {
        Swal.fire({
            icon: "success",
            title: "Well done! / Bien Hecho! Now try the next question.",
            showConfirmButton: false,
            timer: 1900
        })
        score++;
        $(".question-container").click(function () {
            $(this).hide();
        });
    } else {
        Swal.fire({
            icon: "warning",
            title: "Unlucky, try again.",
            showConfirmButton: false,
            timer: 1900
        })
    }
}



//Gets the number of correct answers from gradeQuestion function above
//and produces a message to user when button is clicked.

document.getElementById("score").addEventListener("click", totalScore);

function totalScore() {
    Swal.fire({
        title: "Congratulations / Felicidades",
        text: "You got " + score + " / 10",
    })
}
