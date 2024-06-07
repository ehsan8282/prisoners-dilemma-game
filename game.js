document.getElementById('cooperate').addEventListener('click', function() {
    playRound('cooperate');
});

document.getElementById('defect').addEventListener('click', function() {
    playRound('defect');
});

function playRound(playerChoice) {
    // Display chosen prisoner images
    document.getElementById('player').innerHTML = `<img src="player_${playerChoice}.png" alt="Player" width="100">`;
    const opponentChoice = Math.random() < 0.5 ? 'cooperate' : 'defect';
    document.getElementById('opponent').innerHTML = `<img src="opponent_${opponentChoice}.png" alt="Opponent" width="100">`;

    // Game logic
    let result;
    if (playerChoice === 'cooperate' && opponentChoice === 'cooperate') {
        result = "Both players cooperate. Each receives a mild sentence (-1).";
    } else if (playerChoice === 'cooperate' && opponentChoice === 'defect') {
        result = "You cooperate, but your opponent defects. You receive a severe sentence (-3).";
    } else if (playerChoice === 'defect' && opponentChoice === 'cooperate') {
        result = "You defect, but your opponent cooperates. You receive no sentence (0).";
    } else if (playerChoice === 'defect' && opponentChoice === 'defect') {
        result = "Both players defect. Each receives a moderate sentence (-2).";
    }

    document.getElementById('result').innerText = result;
}
