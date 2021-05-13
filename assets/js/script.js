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
        game_1: "Question 1",
        question: "1. How do you say hello in Spanish?",
        image: "assets/images/hello.jpg",
        choices: ["Adios", "Hola", "Bueno"],
        answer: "Hola"
    },
    {
        game_2: "Question 2",
        question: "2. What does bicicleta mean in English?",
        image: "assets/images/bicycle.jpg",
        choices: ["Bicycle", "Bucket", "Balloon"],
        answer: "Bicycle"
    },
    {
        game_3: "Question 3",
        question: "3. How do you say guitar in Spanish?",
        image: "assets/images/guitar.jpg",
        choices: ["Getafe", "Gorila", "Guitarra"],
        answer: "Guitarra"
    },
    {
        game_3: "Question 4",
        question: "4. What does perro mean in English?",
        image: "assets/images/dog.jpg",
        choices: ["Dog", "Cat", "Parrot"],
        answer: "Dog"
    },

    {
        game_3: "Question 5",
        question: "5. What does playa mean in English?",
        image: "assets/images/beach.jpg",
        choices: ["Plant", "Party", "Beach"],
        answer: "Beach"
    },
    {
        game_3: "Question 6",
        question: "6. What is the colour red in Spanish?",
        image: 'tbc.jpg',
        choices: ["Blanco", "Rojo", "Lluvia"],
        answer: "Rojo"
    },
    {
        game_3: "Question 7",
        question: "7. What is sun in Spanish?",
        image: 'tbc.jpg',
        choices: ["Sol", "Sello", "'Bote"],
        answer: "Sol"
    },
    {
        game_3: "Question 8",
        question: "8. What does flor mean in English?",
        image: 'tbc.jpg',
        choices: ["Flower", "Car", "Foot"],
        answer: "Flower"
    },
    {
        game_3: "Question 9",
        question: "9. What is hat in Spanish?",
        image: 'tbc.jpg',
        choices: ["Sandalias", "Calcetines", "Sombrero"],
        answer: "Sombrero"
    },
    {
        game_3: "Question 10",
        question: "10. What does amigo mean in English?",
        image: 'tbc.jpg',
        choices: [ "Auntie", "Friend", "Apple"],
        answer: "Friend"
    }
];
let currentQuestion = 0;

const BUTTONS_CONTAINER = document.getElementById("buttons");

// Loop through all the questions above and create a div with the question and
// multiple choice buttons.
for (let question of questions) {
  let questionDiv = document.createElement("div");
  questionDiv.classList.add("question-container");

  // Add the question text.
  let questionText = document.createElement("p");
  questionText.classList.add('question-text')
  questionText.innerHTML = question.question;
  questionDiv.appendChild(questionText);

  // Show the choices. Each choice is a button that has the choice as its text
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
  // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
  button.dataset.word = spanishWordOnButton;
  
  // Add an attribute with the correct answer for this question, to make grading easy.
  button.dataset.correctAnswer = answer;

  // Make the button trigger the grading function below when clicked.
  button.addEventListener("click", gradeQuestion);

  return button;
}

/* Event listener for answer buttons. Decide whether the answer chosen is correct or not.

@param {Event} - The fired event. This is standard for all event listeners.
                 https://developer.mozilla.org/en-US/docs/Web/API/EventListener

*/
function gradeQuestion(evt) {
  // The object that triggered the event i.e. the button
  let clickedButton = evt.target;

  // The word on the button, which is encoded in data-word (see generateAnswerButton above)
  let buttonWord = clickedButton.dataset.word;
  let correctAnswer = clickedButton.dataset.correctAnswer;

  if (buttonWord === correctAnswer) {
    alert("Correct!");
  } else {
    alert("Please try again.");
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


