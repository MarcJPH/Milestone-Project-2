//An array of questions that will be loaded onto the game_page.html

const [
    {
        ID: 'uno',
        question: 'How do you say hello in Spanish?'
    },

{
    ID: 'dos',
    question: 'What is Spanish for bicycle'
},
]





//To send comments and feedback from the form in the Contact Us link
//to email using EmailJS.
function sendMail(contactForm) {
    emailjs.send("service_f8z2kxb","template_06puzpp", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
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
