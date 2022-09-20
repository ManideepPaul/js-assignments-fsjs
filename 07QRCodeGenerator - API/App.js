const img = document.getElementById("img");
const input = document.getElementById("input");
const submit = document.getElementById("submit");


const getQr = () => {
    // If the input field is blank pop an alert
    if (!input.value) {
        alert("Please enter value")
    }
    // else generate QR using provided data and display it
    else {
        const inputValue = input.value;
        img.src = `http://api.qrserver.com/v1/create-qr-code/?data=${inputValue}!&size=200x200`;
        img.style.display = "block";

        // Clearing the input field after QR generation.
        input.value = "";
    }
}

// Click event on Generate QR Code button will invoke the getQr function
submit.addEventListener("click", getQr);
