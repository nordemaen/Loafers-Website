// get object of button
let buttonSubscribe = document.getElementById("subscribe");

// add event listener
buttonSubscribe.addEventListener("click", function() {
    // store value 
    let checkInput = document.getElementById("subscribe-input").value;
    let changeStyle = document.getElementById("subscribe-input").style.color = "gray";

    // selection, check if input is presence
    if (checkInput === "") {
        // Output Error
        alert("Please enter a valid email.")
    } else {
        // Add User
        alert(`Thank you, ${checkInput}. You've been added to our mailing list!`);

        /* 
            BACK-END here
        */
    }
}) 