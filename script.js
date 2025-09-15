// Get references to DOM elements
const textarea = document.getElementById('inputText');
const charCount = document.getElementById('charCount');

// Add event listener for input changes
textarea.addEventListener('input', () => {
    const count = textarea.value.length;
    charCount.textContent = `Characters: ${count}`;
});