function submitBloodRequest() {
    var name = document.getElementById('name').value.trim();
    var bloodType = document.getElementById('blood-type').value;
    var location = document.getElementById('location').value.trim();
    var contact = document.getElementById('contact').value.trim();

   
    if (name === '' || location === '' || contact === '') {
        alert('Please fill out all the required fields.');
        return;
    }

    
    var contactRegex = /^[0-9]{10}$/;
    if (!contactRegex.test(contact)) {
        alert('Please enter a valid 10-digit contact number.');
        return;
    }

 
    alert('Blood request submitted successfully!');
}