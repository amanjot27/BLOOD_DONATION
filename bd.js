// Sample data: Replace this with your actual data
const upcomingDrives = [
    { id: 'drive1', date: '2023-08-15', location: 'Community Center, New York' },
    { id: 'drive2', date: '2023-08-25', location: 'Medical Center, Los Angeles' },
    { id: 'drive3', date: '2023-09-05', location: 'Red Cross Center, Chicago' },
    // Add more drive information here
];

function displayUpcomingDrives() {
    const upcomingDrivesList = document.getElementById('upcoming-drives');

    // Clear any existing list items
    upcomingDrivesList.innerHTML = '';

    // Populate the list with upcoming blood drives
    upcomingDrives.forEach(drive => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>Date:</strong> ${drive.date}<br>
            <strong>Location:</strong> ${drive.location}<br>
            <strong>Drive ID:</strong> ${drive.id}<br>
            <button onclick="registerForDrive('${drive.id}')">Register</button><hr>
        `;
        upcomingDrivesList.appendChild(listItem);
    });
}

function registerForDrive(driveId) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const driveIdInput = document.getElementById('drive-id').value;

    // Perform validation to check if the entered drive ID matches the selected drive ID
    if (driveId !== driveIdInput) {
        alert('Invalid Drive ID. Please enter the correct Drive ID.');
        return;
    }

    // You can implement additional validation here (e.g., check if the drive is already full)

    // Perform the registration process (you can customize this as per your design)
    alert(`Thank you, ${name}, for registering for the blood drive with ID: ${driveId}. We will contact you at ${email} with further details.`);
}