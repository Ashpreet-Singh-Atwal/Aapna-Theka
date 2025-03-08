// Toggle between sign-up and sign-in forms
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Age Verification Modal Logic
document.addEventListener('DOMContentLoaded', function() {
    const ageModal = document.getElementById('ageModal');
    const submitDobButton = document.getElementById('submitDob');
    const dobInput = document.getElementById('dobInput');
    const errorMessage = document.getElementById('error-message');

    // Function to calculate age based on date of birth
    function calculateAge(dob) {
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    // Verify age on DOB input submission
    function verifyAge() {
        const dob = dobInput.value;
        if (dob) {
            const age = calculateAge(dob);
            if (age >= 21) {
                ageModal.style.display = 'none'; // Close modal if age is valid
            } else {
                errorMessage.style.display = 'block'; // Show error if underage
            }
        }
    }

    // Show the age verification modal
    ageModal.style.display = 'block';

    // Event listener for submitting date of birth
    submitDobButton.addEventListener('click', verifyAge);

    // Close the age modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === ageModal) {
            ageModal.style.display = 'none'; // Close the modal when clicking outside
        }
    });
});

// Validate sign-in form on submission
function validateSignin() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    if (loginUsername === '' || loginPassword === '') {
        alert('Please fill in all fields');
        return false;
    }
    return true; // Proceed with form submission if inputs are valid
}
