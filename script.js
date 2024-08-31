function calculateAge() {
    const birthdate = new Date(document.getElementById('birthdate').value);
    const today = new Date();
    const resultDiv = document.getElementById('result');

    if (isNaN(birthdate.getTime())) {
        resultDiv.textContent = "Please enter a valid date.";
        resultDiv.classList.remove('age-animation');
        return;
    }

    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    const years = age;
    const months = monthDiff < 0 ? 12 + monthDiff : monthDiff;
    const days = today.getDate() - birthdate.getDate();

    let ageString = `You are ${years} years`;
    if (months > 0) ageString += `, ${months} month${months > 1 ? 's' : ''}`;
    if (days > 0) ageString += `, and ${days} day${days > 1 ? 's' : ''}`;
    ageString += ' old!';

    resultDiv.textContent = ageString;
    resultDiv.classList.add('age-animation');
}

// Set max date to today
const today = new Date().toISOString().split('T')[0];
document.getElementById('birthdate').setAttribute('max', today);