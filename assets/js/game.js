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
]


//Generate questions to the HTML page//
function generateQuestion() {
    for (let i = 0; i < questions.length; i++) {


        //Sets up the html layout for the Questions in the game using the objects within the questions array  
        document.getElementById("question").innerHTML = questions[i];
    }
}

//`<h3> ${q.question} </h3>`
//let q = questions[0];

