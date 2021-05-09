
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
