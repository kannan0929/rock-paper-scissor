function ageInDays() {
   var age = prompt("what is your age?");
   var ageDays = age*365;
   var h2 = document.createElement('h2');
   var text = document.createTextNode('your are  ' + ageDays + '  days old');
   h2.setAttribute("id", 'age');
   h2.appendChild(text);
   document.getElementById('result').appendChild(h2);
}

function reset() {
    document.getElementById("age").remove();
}

function catGen(){
    var image = document.createElement('img');
    var div = document.getElementById('gen');
    image.src = "img/logo.png";
    div.appendChild(image);
    console.log(Math.floor(Math.random()*100))
}

function rpsGame(yourChoice){
    console.log('human',yourChoice.id);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numChoice(int());
    console.log('computer',botChoice);
    result = findWinner(humanChoice,botChoice);
    console.log(result)
    message = finalMessage(result);
    console.log(message);
    rpsFronEnd(humanChoice,botChoice,message); 
}

function int(){
    return Math.floor(Math.random()*3)
}

function numChoice(number){
    return['rock','paper','scissors'] [number];
}

function findWinner(yourChoice,computerChoice){
    var data = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
        
    };
    var yourScore = data[yourChoice][computerChoice];
    var computerScore = data[computerChoice][yourChoice];

    return [yourScore, computerScore];

}

function finalMessage([yourScore, computerScore]){
      if(yourScore === 0) {
          return {'message': 'you lost', 'color': 'red'};
      } else if(yourScore === 0.5) {
          return { 'message': 'you tied', 'color': 'yellow'};
      } else {
          return { 'message': 'you won', 'color': 'green'};
      }
}

function rpsFronEnd(humanImageChoice,botImageChoice,finalMessage) {

    var imageData = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src ='" + imageData[humanImageChoice] +"'style='box-shawdow: red'>";
    document.getElementById('game').appendChild(humanDiv);
    
    messageDiv.innerHTML = "<h1 style='color:"+finalMessage['color']+";'>" + finalMessage['message'] +"</h1>"
    document.getElementById('game').appendChild(messageDiv);

    botDiv.innerHTML = "<img src ='" + imageData[botImageChoice] + "' style='box-shawdow: red'>";
    document.getElementById('game').appendChild(botDiv);
}