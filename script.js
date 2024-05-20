
// Select the button using its ID
const button1 = document.querySelector(".g1");
const button2 = document.querySelector(".g2");
const button3 = document.querySelector(".g3");
// Add an event listener to the button
button1.addEventListener('click', function() {
    alert(`Hey Player
    Welcome to Guess the Number game.
    This is a Single Player Game.
    You can Guess any number between 1 and 20 `);
});

button2.addEventListener('click', function() {
    alert(`Hey Player
    Welcome to Rock paper scissors game.
    This game is between you and computer.
    Enjoy Playing!!`);
});

button3.addEventListener('click', function() {
    alert(`Hey Players!!
    Welcome to Hold the dice game.
    This is a Two Player Game.
    If dice Rolled 1 your current score will become 0.
    If you hold the dice your current score will be
    added to your main score.
    Roll the dice and hold your score.
    (Max score:100)`);
});