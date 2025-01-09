function submitText() {
    const text = document.getElementById('expandableTextarea').value;
    alert('Je hebt dit verstuurd: ' + text); // You can process this, like sending it to a server
    document.getElementById('expandableTextarea').value = ''; // Clear the textarea after submission
}