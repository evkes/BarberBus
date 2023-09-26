function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "" || email == "" || message == "") {
        alert("All fields must be filled out");
        return false;
    }

    // You can add more specific validation for the email format if needed.

    return true;
}