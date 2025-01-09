function resizeTextarea(element) {
    element.style.height = 'auto'; // Zet de hoogte eerst terug
    element.style.height = (element.scrollHeight) + 'px'; // Verhoog de hoogte op basis van de inhoud
}