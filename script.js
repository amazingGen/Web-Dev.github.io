function SUBMIT(event) {
    form = document.getElementById('forms');
       if (form.checkValidity()) {
           alert('Thank you for submitting your response.');
       }
   }