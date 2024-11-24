'use strict';
const player0 = document.querySelector('.player0');
const player1 = document.querySelector('.player1');

const score0 = document.querySelector('#score-0');
const score1 = document.querySelector('#score-1');

const currentScr0 = document.getElementById('currentScore-0');
const currentScr1 = document.getElementById('currentScore-1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn1');
const btnRoll = document.querySelector('.btn2');
const btnHold = document.querySelector('.btn3');

let score, currentScr, activePlayer, playing;

const init = function () {

    score = [0, 0];
    currentScr = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    currentScr0.textContent = 0;
    currentScr1.textContent = 0;

    dice.classList.add('hidden');
    player0.classList.remove('player-winner');
    player1.classList.remove('player-winner');
    player0.classList.add('Player-active');
    player1.classList.remove('Player-active');
};
init();

const switchPlayer = function () {
    currentScr = 0;
    document.getElementById(`currentScore-${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    player0.classList.toggle('Player-active');
    player1.classList.toggle('Player-active');
};


btnRoll.addEventListener('click', () => {
    if (playing) {

        const newRandonNo = Math.trunc(Math.random() * 6) + 1;
        console.log(newRandonNo);

        dice.classList.remove('hidden');

        dice.src = `images/dice-${newRandonNo}.png`

        if (newRandonNo !== 1) {
            currentScr += newRandonNo;
            document.getElementById(`currentScore-${activePlayer}`).textContent = currentScr;
        }
        else {
            switchPlayer();
        }
    }

});

btnHold.addEventListener('click', function () {
    if (playing) {

        score[activePlayer] += currentScr;
        document.getElementById(`score-${activePlayer}`).textContent = score[activePlayer];


        if (score[activePlayer] >= 100) {
            dice.classList.add('hidden');
            playing = false;
            document.querySelector(`.player${activePlayer}`).classList.add('player-winner');
            document.querySelector(`.player${activePlayer}`).classList.remove('player-active');
        }
        else
            switchPlayer();
    }
});

btnNew.addEventListener('click', init)


