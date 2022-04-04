let buttonSubscribe = document.getElementById("subscribe");

buttonSubscribe.addEventListener("click", function() {
    let checkInput = document.getElementById("subscribe-input").value;

    if (checkInput === "") {
        let changeStyle = document.getElementById("subscribe-input").style.color = "gray";
    } else {
        alert(`Thank you, ${checkInput}. You've been added to our mailing list!`);
    }
}) 