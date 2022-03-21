// Create 'onclick' event listener with button of id 'confirm'
document.getElementById('confirm').addEventListener('click', function () {
    let username = document.getElementById("full-name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;

    // Store state of Checkbox in variable, boolean
    let checkBox = document.getElementById("checkbox-confirm");

    // Check if checkbox is set to state of 'false'
    if (!checkBox.checked) {
        // Change styling and contents of label
        let error = document.getElementById("alert-user").style.fontWeight = "bold";
        let errorMsg = document.getElementById("alert-user").innerHTML = "Confirm Details*";
    }
    // Check if checkbox is set to state of 'true'
    else if (checkBox.checked) {
        // If input-fields are empty, change contents of hidden label
        if (username == "" || email == "" || subject == "" || message == "") {
            let alertUser = document.getElementById("error-message").innerHTML = "All fields are not completed";
        }
        // Alert use that message has been recieved, refresh page
        else {
            alert("Thank you for contacting us, we'll reply shortly!")
            window.location.href = "contact.html";
        }
    }
})