document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');
    
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            window.location.href = 'CONTACTFORUM.html'; // Redirect to the contact form page
        });
    }

    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const question = document.getElementById('question').value;

            if (validateForm(name, email, question)) {
                fetch('/send-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ name, email, question })
                })
                .then(response => response.text())
                .then(data => {
                    console.log('Form submitted:', data);
                    alert('Your question has been submitted successfully!');
                    form.reset();
                    window.location.href = 'index.html'; // Redirect to the main page
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('There was an error submitting your question.');
                });
            }
        });
    }

    function validateForm(name, email, question) {
        if (name === '' || email === '' || question === '') {
            alert('All fields are required.');
            return false;
        }
        return true;
    }
});

document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const isSuccess = Math.random() > 0.5; 

    if (isSuccess) {
        alert('De gegevens zijn succesvol doorgestuurd');
    } else {
        alert('De gegevens zijn onsuccesvol doorgestuurd, probeer het opnieuw');
    }
});

