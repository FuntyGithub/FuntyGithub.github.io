
document.addEventListener('DOMContentLoaded', function() {

    // console.log(hasCookiesAccepted());
    // Cookies
    if (getCookie('theme') != null) {
        document.body.classList.remove(document.body.classList[0]);
        document.body.classList.add(getCookie('theme'));
    }


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


    // Theme menu
    let themeDivs = document.getElementsByClassName('themeDiv');
    for (let i = 0; i < themeDivs.length; i++) {
        let themeDiv = themeDivs[i];
        themeDiv.addEventListener('click', function() {
            let themeName = themeDiv.getAttribute('data-theme-name');
            document.body.classList.remove(document.body.classList[0]);
            document.body.classList.add(themeName);

            this.classList.add('selected');
            let otherThemeDivs = document.getElementsByClassName('themeDiv');
            for (let i = 0; i < otherThemeDivs.length; i++) {
                let otherThemeDiv = otherThemeDivs[i];
                if (otherThemeDiv != this) {
                    otherThemeDiv.classList.remove('selected');
                }
            }
            // closePopup('themeMenu');

            // cookies
            if (hasCookiesAccepted() && getCookie('savedTheme') == 'true') {
                setCookie('theme', themeName, 365);
            }
        });
    }
    
    
    document.addEventListener('keydown', function(event) {
        if (event.key == 'Escape') {
            closePopup('themeMenu');
        }
    });

    document.addEventListener('mousedown', function(event) {
        console.log(event.target);
        // popup
        if (event.target == document.body) {
            let openPopup = document.getElementsByClassName('popup')[0];
            closePopup(openPopup.id);
        }
        if (event.target.classList.contains('popup')) {
            closePopup(event.target.id);
        }

        //middle click
        // I am not sure if I want this .-.
        // if (event.button == 1) {
        //     if (event.target.classList.contains('button')) {
        //         // event.preventDefault();
        //         event.target.click();
        //     }
        // }
    });

});

function navBtn(element) {
    window.location.href = element.children[0].href
}



function themeBtn() {
    openPopup('themeMenu');

    if (getCookie('savedTheme') == 'true') {
        document.getElementById('saveThemeToCookie').checked = true;
    }

    let currentTheme = document.body.classList[0];
    let themeDivs = document.getElementsByClassName('themeDiv');
    for (let i = 0; i < themeDivs.length; i++) {
        let themeDiv = themeDivs[i];
        if (themeDiv.getAttribute('data-theme-name') == currentTheme) {
            themeDiv.classList.add('selected');
        } else {
            themeDiv.classList.remove('selected');
        }
    }

}

function openPopup(id) {
    document.getElementById(id).style.display = 'block';
    document.getElementById(id).classList.remove('blur');
    document.getElementById('header').classList.add('blur');
    document.getElementById('content').classList.add('blur');
    
    let popups = document.getElementsByClassName('popup');
    for (let i = 0; i < popups.length; i++) {
        let popup = popups[i];
        if (popup.id != id) {
            popup.classList.add('blur');
        }
    }
}

function closePopup(id) {
    document.getElementById(id).style.display = 'none';
    
    let popups = document.querySelectorAll('.popup:is([style*="display: block"])');
    console.log(popups);
    for (let i = 0; i < popups.length; i++) {
        let popup = popups[i];
        popup.classList.remove('blur');
    }
    if (popups.length == 0) {
        document.getElementById('header').classList.remove('blur');
        document.getElementById('content').classList.remove('blur');
    }
        
}

function themeSearch(text) {
    let themeDivs = document.getElementsByClassName('themeDiv');
    for (let i = 0; i < themeDivs.length; i++) {
        let themeDiv = themeDivs[i];
        if (themeDiv.children[1].innerHTML.toLowerCase().includes(text.toLowerCase())) {
            themeDiv.style.display = 'inline-block';
        } else {
            themeDiv.style.display = 'none';
        }
    }
}

// cookies
function setCookie(name, value, days, global) {    

    let path = "; path=" + window.location.pathname;
    if (global) {
        path = "; path=/";
    }


    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + path;
}

function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function hasCookiesAccepted() {
    return getCookie('cookiesAccepted') == 'true';
}

function acceptCookies() {
    setCookie('cookiesAccepted', 'true', 365);
    closePopup('cookiesMenu');
}

function cancelCookies() {
    closePopup('cookiesMenu');
    document.getElementById('saveThemeToCookie').checked = false;
}

function saveThemeToCookieChange() {
    if(!hasCookiesAccepted()) {
        openPopup('cookiesMenu');
    }

    if (document.getElementById('saveThemeToCookie').checked) {
        setCookie('savedTheme', 'true', 365);
    } else {
        setCookie('savedTheme', 'false', 365);
    }
}