
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


    // custom theme menu
    for (let index = 0; index < localStorage.length; index++) {
        const key = localStorage.key(index);
        if (key.startsWith('CUSTOM_THEME-')) {
            // get theme
            let theme = JSON.parse(localStorage.getItem(key));

            // make element
            let customThemeElement =
            '<div class="themeDiv container" data-theme-name="theme-'+theme.name+'">'+
                '<img src="'+theme.image+'" alt="theme-thumbnail" class="themeImg" width="1920px" height="1080px">'+
                '<h1 class="heading">'+ theme.name +' <i class="fas fa-trash" onclick="deleteCustomTheme(this.parentElement.parentElement.dataset.themeName.substring(6))" style="font-size: medium; color: var(--higlight-color)" title="Delete"></i></h1>'+
                '<a class="text">'+ theme.description +'</a>'+
            '</div>';
            let customThemeDiv = document.createElement('div');
            customThemeDiv.innerHTML = customThemeElement;
            customThemeDiv = customThemeDiv.firstChild;

            // append to theme menu
            let themeMenuGrid = document.getElementById('themeMenuGrid');
            themeMenuGrid.appendChild(customThemeDiv);

            // add to css
            let css = document.createElement('style');
            css.innerHTML =
            '.theme-'+theme.name+' {'+
                '--primary-color: '+theme['primary-color']+';'+
                '--text-color: '+theme['text-color']+';'+
                '--higlight-color: '+theme['higlight-color']+';'+
                '--shadow-color: '+theme['shadow-color']+';'+
                '--button-color: '+theme['button-color']+';'+
                '--button-text-color: '+theme['button-text-color']+';'+
                '--button-shadow-color: '+theme['button-shadow-color']+';'+
                ' '+
                '--background-color: '+theme['background-color']+';'+
                '--container-color: '+theme['container-color']+';'+
                '--container-inner-color: '+theme['container-inner-color']+';'+
                '--container-highlight-color: '+theme['container-highlight-color']+';'+
            '}';

            document.body.appendChild(css);

        }
        
    }


    // Theme menu
    let themeDivs = document.getElementsByClassName('themeDiv');
    for (let i = 0; i < themeDivs.length; i++) {
        let themeDiv = themeDivs[i];
        themeDiv.addEventListener('click', function() {

            // check if clicked on trash icon
            if (event.target.classList.contains('fa-trash')) return;

            let themeName = themeDiv.getAttribute('data-theme-name');
            switchTheme(themeName);

            this.classList.add('selected');
            let otherThemeDivs = document.getElementsByClassName('themeDiv');
            for (let i = 0; i < otherThemeDivs.length; i++) {
                let otherThemeDiv = otherThemeDivs[i];
                if (otherThemeDiv != this) {
                    otherThemeDiv.classList.remove('selected');
                }
            }
            // closePopup('themeMenu');

        });
    }

    let createCustomThemeElement = 
    '<div class="themeDiv container" data-theme-name="theme-custom">'+
        '<img src="./assets/themes/custom.png" alt="theme-thumbnail" class="themeImg">'+  
        '<h1 class="heading">create custom</h1>'+
        '<a class="text">Select to create your own theme</a>'+
    '</div>';

    let createCustomThemeDiv = document.createElement('div');
    createCustomThemeDiv.innerHTML = createCustomThemeElement;
    createCustomThemeDiv = createCustomThemeDiv.firstChild;
    
    let themeMenuGrid = document.getElementById('themeMenuGrid');
    themeMenuGrid.appendChild(createCustomThemeDiv);

    createCustomThemeDiv.addEventListener('click', function() {
        // alert('This feature is not yet available');
        closePopup('themeMenu');
        // openPopup('customThemeMenu');
        let div = document.getElementById('customThemeMenu');
        div.style.display = 'flex';
        div.classList.remove('blur')

    });




    document.addEventListener('keydown', function(event) {
        if (event.key == 'Escape') {
            closePopup('themeMenu');
        }
    });

    document.addEventListener('mousedown', function(event) {
        // console.log(event.target);
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

        // drag
        if (event.target.classList.contains('draggable')) {
            let element = event.target;
            
            document.onmousemove = function(event) {
                let a = element.offsetWidth / 2;
                let b = element.offsetHeight / 2;

                element.style.top = (event.clientY - b) + 'px';
                element.style.left = (event.clientX - a) + 'px';
                
            }

            document.onmouseup = function() {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }
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
    // console.log(popups);
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
function setCookie(name, value, days) {    

    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
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


function customTheme(argument) {
    let value = document.querySelectorAll('[data-customTheme="' + argument + '"]')[0].value;
    document.body.style.setProperty('--' + argument, value);
}

function saveCustomTheme() {
    
    let inputs = document.querySelectorAll('[data-customTheme]');
    let theme = {};
    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let value = input.value;

        // check if value is empty
        if (value == '') {
            return alert('Please fill in all fields');
        }

        let argument = input.getAttribute('data-customTheme');
        theme[argument] = value;
    }

    // save to local storage
    localStorage.setItem("CUSTOM_THEME-"+theme['name'], JSON.stringify(theme));
    
    closePopup('customThemeMenu');
    alert('Theme saved');

    // switch to theme
    switchTheme('theme-'+theme['name'])
}

function switchTheme(theme) {
    document.body.classList.remove(document.body.classList[0]);
    document.body.classList.add(theme);

    // cookies
    if (hasCookiesAccepted() && getCookie('savedTheme') == 'true') {
        setCookie('theme', themeName, 365);
    }
}

function deleteCustomTheme(themeName) {

    if(confirm('Are you sure you want to delete this theme?')) {
        localStorage.removeItem('CUSTOM_THEME-'+themeName);
        let themeDiv = document.querySelectorAll('[data-theme-name="theme-'+themeName+'"]')[0];
        themeDiv.remove();
        alert('Theme deleted');
    }

}