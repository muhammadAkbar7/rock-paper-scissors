function computerChoice() {
    var choices = ["rock", "paper", "Scissors"]

    var randIndex = Math.floor(Math.random() * choices.length);

    // var randomValue = Math.abs(Math.random());

    // var randIndex = randomValue * choices.length

    return choices[randIndex];
}

// var selected = computerChoice;

for (var i = 0; i < 10; i++) {
    var selected = computerChoice();
    console.log(selected);
}