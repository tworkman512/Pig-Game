/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// Define our variables up here...
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// Initially do not display the dice image
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Show the dice on click of the roll button
document.querySelector('.btn-roll').addEventListener('click', function() {
    // 1. Need a random number
    var dice = Math.floor(Math.random() * 6) + 1;
    
    // 2. Display the result of a random number
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    
    // 3. Update the round scorce only IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice; 
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        // Next player
        // We're using a ternary operator here
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
    }
});







//document.querySelector('#current-' + activePlayer).textContent = dice;
//
//var x = document.querySelector('#score-0').textContent;
//console.log(x);