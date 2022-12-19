// on load
document.addEventListener('DOMContentLoaded', function() {
    animation('start');

});

// // on resize
// window.addEventListener('resize', function() {
//     animation('stop');
//     animation('start');
// });

function animation(status) {

    // define variables
    let div = document.getElementById('containerDiv'),
        x = div.offsetLeft,
        y = div.offsetTop,
        xDirection = 1,
        yDirection = 1,
        speed = 5;

    div.style.width = div.offsetWidth + 'px';

    if (status == 'stop') {
        clearInterval(start);
    } else if (status == 'start') {
        
        var start = setInterval(function() {
            // move div
            div.style.left = x + 'px';
            div.style.top = y + 'px';
            // change direction on edge
            let hit = 0;
            if (x > window.innerWidth - div.offsetWidth) {
                xDirection = -1;
                hit++;
            } else if (x <= 0) {
                xDirection = 1;
                hit++;
            }

            if (y > window.innerHeight - div.offsetHeight) {
                yDirection = -1;
                hit++;
            } else if (y <= 0) {
                yDirection = 1;
                hit++;
            }
            // change position
            x += speed * xDirection;
            y += speed * yDirection;

            // when hit edge
            if (hit == 1) {
                // change color
                let color = 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
                div.style.backgroundColor = color;
                div.classList.remove('rainbow');
            }

            if (hit >= 2) {
                div.classList.add('rainbow');
            }

            console.log(hit);

        }, 60);
    }


}

