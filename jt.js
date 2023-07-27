function registerAsDonor() {
            
    var donorName = document.getElementById('donor-name').value.trim();
    var donorBloodType = document.getElementById('donor-blood-type').value;
    var donorLocation = document.getElementById('donor-location').value.trim();

    
    if (donorName === '' || donorLocation === '') {
        alert('Please fill out all the required fields for becoming a donor.');
        return;
    }

    
    alert('Successfully registered as a blood donor!');
}

function registerAsVolunteer() {
    
    var volunteerName = document.getElementById('volunteer-name').value.trim();
    var volunteerInterest = document.getElementById('volunteer-interest').value.trim();

    
    if (volunteerName === '' || volunteerInterest === '') {
        alert('Please fill out all the required fields for volunteering.');
        return;
    }

    
    alert('Successfully registered as a volunteer!');
}