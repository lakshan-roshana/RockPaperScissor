function game(playerChoice) {
    //console.log(playerChoice);

    let humanChoice = playerChoice.id;
    let botChoice = computerChoice(randomChoice());
    //console.log(botChoice);
    let resultsheet = decision(humanChoice, botChoice);
    console.log(resultsheet);

    let msg = finaldecision(resultsheet);

    frontend(humanChoice, botChoice, msg);
}

function randomChoice() {
    //let choices = ['rock', 'paper', 'scissor'];
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
}

function computerChoice(number) {
    let choices = ['rock', 'paper', 'scissor'][number];
    return choices;
}

function decision(hChoice, bChoice){
    let gameDatabase = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissor': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'rock': 0, 'paper': 1, 'scissor': 0.5}
    };

    let humanScore = gameDatabase[hChoice][bChoice];
    let botScore = gameDatabase[bChoice][hChoice];

    return [humanScore, botScore];
}

function finaldecision([humanScore, botScore]){
    if (humanScore === 0){
        return {'message': 'You Lost!', 'color': 'red'};
    } else if (humanScore === 0.5){
        return {'message': 'Draw!', 'color': 'yellow'};
    } else {
        return {'message': 'You Win!', 'color': 'green'};
    }
}

function frontend(humanChoiceImage, botChoiceImage,finalmsg){
    let imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    };

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    let humanDiv = document.createElement('div');
    let botDiv = document.createElement('div');
    let msgDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imageDatabase[humanChoiceImage] + "' height=150 width=150 style='box-shadow: 3px 6px 20px rgba(37, 50, 233, 1);'>";
    msgDiv.innerHTML = "<h1 style='color: " + finalmsg['color'] + "; font-size: 60px; padding: 30px; '>" + finalmsg['message'] + "</h1>";
    botDiv.innerHTML = "<img src='" + imageDatabase[botChoiceImage] + "' height=150 width=150 style='box-shadow: 3px 6px 20px rgba(243, 38, 24, 1);'>";

    document.getElementById('imageboxid').appendChild(humanDiv);
    document.getElementById('imageboxid').appendChild(msgDiv);
    document.getElementById('imageboxid').appendChild(botDiv);
}



