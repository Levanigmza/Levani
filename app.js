let position = 0;
let marioStart = document.getElementById('mario_Start');
let mario = document.getElementById('mario');
const maxPosition = window.innerWidth > 2560 ? 2000 : window.innerWidth;
let isRunning = false;


document.addEventListener("DOMContentLoaded", function () {
    marioStart.style.display = 'block'; 
    mario.style.display = 'none'; 
});

function moveMario() {
    position += window.innerWidth / 500 + 0.5;

    if (position > maxPosition) {
        position = mario.width - 40;
        isRunning = false;
        marioStart.style.display = 'block'; 
        mario.style.display = 'none'; 
    } 

    mario.style.left = position + 'px';

    if (isRunning) {
        requestAnimationFrame(moveMario);
    }
}

document.getElementById('startButton').addEventListener('click', function () {
    if (!isRunning) {
        position = 0; 
        marioStart.style.display = 'none';
        mario.style.display = 'block';
        isRunning = true;
        document.getElementById('startButton').style.display = 'none';
        moveMario();
    }
});



//moveMario();



let isMoving = false;
        let initialX = 0;

        function startMove(event) {
            isMoving = true;
            initialX = event.clientX;
        }

        function stopMove() {
            isMoving = false;
        }

        document.addEventListener('mousemove', moveDetails);

        function moveDetails(event) {
            if (isMoving) {
                const movement = event.clientX - initialX;
                const details = document.querySelector('.personal-details');

                const multiplier = 0.1;
                const currentMargin = parseInt(getComputedStyle(details).marginLeft);
                details.style.marginLeft = currentMargin + multiplier * movement + 'px';
            }
        }