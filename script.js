
document.addEventListener('DOMContentLoaded', function() {
    let age = document.getElementById('age');
    let birthdate = new Date('2006-05-17');
    let today = new Date();
    let ageInYears = today.getFullYear() - birthdate.getFullYear();

    let i = 0;
    setInterval(function() {
        if (i < ageInYears+1) {
            age.innerHTML = i++;
        }
    }, 125);

});