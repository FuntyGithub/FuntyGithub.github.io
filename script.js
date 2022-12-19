
document.addEventListener('DOMContentLoaded', function() {
    let age = document.getElementById('age');
    let birthdate = new Date('2006-05-17');
    let today = new Date();
    let ageInYears = today.getFullYear() - birthdate.getFullYear();


    // let lines = document.getElementsByClassName('write');
    // for (let i = 0; i < lines.length; i++) {
    //     let line = lines[i];
    //     line.

    // }

    let line1 = document.getElementById('line1');
    let line2 = document.getElementById('line2');
    let line3 = document.getElementById('line3');
    let line4 = document.getElementById('line4');
    let line5 = document.getElementById('line5');

    line1.style.borderRight = '1px solid orange';
    line1.style.animationPlayState = 'running';

    line1.addEventListener('animationend', function() {
        line1.style.borderRight = 'none';
        line1.style.width = '100%';
        line1.style.whiteSpace = 'normal';

        
        line2.style.borderRight = '1px solid orange';
        line2.style.animationPlayState = 'running';
        
        let i = 0;
        setInterval(function() {
            if (i < ageInYears+1) {
                age.innerHTML = i++;
            }
        }, 125);
    });

    line2.addEventListener('animationend', function() {
        line2.style.borderRight = 'none';
        line2.style.width = '100%';
        line2.style.whiteSpace = 'normal';

        line3.style.borderRight = '1px solid orange';
        line3.style.animationPlayState = 'running';
    });

    line3.addEventListener('animationend', function() {
        line3.style.borderRight = 'none';
        line3.style.width = '100%';
        line3.style.whiteSpace = 'normal';

        line4.style.borderRight = '1px solid orange';
        line4.style.animationPlayState = 'running';
    });

    line4.addEventListener('animationend', function() {
        line4.style.borderRight = 'none';
        line4.style.width = '100%';
        line4.style.whiteSpace = 'normal';

        line5.style.borderRight = '1px solid orange';
        line5.style.animationPlayState = 'running';
    });

    line5.addEventListener('animationend', function() {
        line5.style.borderRight = 'none';
        line5.style.width = '100%';
        line5.style.whiteSpace = 'normal';
    });


    // Whitemode :P
    let text = "",
    whitemode = "light",
    darkmode = "dark";
    document.body.addEventListener('keypress', function(event) {
        text += event.key;
        if (text === whitemode || text === darkmode) {
            document.body.style.filter = document.body.style.filter == 'invert(100%)' ? 'invert(0%)' : 'invert(100%)';
            document.body.style.background = document.body.style.background == 'white' ? 'var(--background-color)' : 'white';
            text = "";
        } else if (!(whitemode.includes(text) || darkmode.includes(text))) {
            text = "";
        }
    });

});

function navBtn(element) {
    window.location.href = element.children[0].href
}