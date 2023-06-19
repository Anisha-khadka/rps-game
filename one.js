function gamerps(yourChoice){
    console.log(yourChoice);
  var humanChoice , botChoice;
humanChoice= yourChoice.id;
 
  botChoice = numbertochoose(randnumber());
  console.log(botChoice);
  result = decideWinner( humanChoice,botChoice);
  console.log(result);
  message =finalMessage(result);
  console.log(message);
  rpsfrontend(yourChoice.id ,botChoice , message);
}

function randnumber(){
 return Math.floor(Math.random()*3);
}

function numbertochoose(number){
 return['rock','paper','scissor'][number]
}
function decideWinner(yourChoice, computerChoice ){
    var rpsdatabase={
                     'rock': {'paper':1 , 'rock':0.5, 'scissor':0},
                     'paper': {'paper':0.5 , 'rock':0, 'scissor':1},
                     'scissor': {'paper':0 , 'rock':1, 'scissor':0.5}
                    };
     var yourScore= rpsdatabase[yourChoice][computerChoice];
     var computerScore =rpsdatabase[computerChoice][yourChoice] ;
     return[yourScore,computerScore];             


}
function finalMessage([yourScore, computerScore]){
    if(yourScore===0){
        return {'message':'You lost!', 'color':'red'};
    }
    else if (yourScore===0.5){
        return {'message':'Its a Tie!', 'color':'yellow'};

    }
    else{
        return {'message':'You Won!!', 'color':'green'};
    }

}
function rpsfrontend(humanImageChoice, computerImageChoice , finalMessage){
 var imagesdatabase={
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissor': document.getElementById('scissor').src
}

 document.getElementById('rock').remove();
 document.getElementById('paper').remove();
 document.getElementById('scissor').remove();

var humanDiv = document.createElement('div');
var botDiv = document.createElement('div');
var msgDiv = document.createElement('div');

humanDiv.innerHTML ="<img src='"+ imagesdatabase[humanImageChoice] +"' height=300 width=300 style='box-shadow:10px 10px 10px 20px blue;'>"
msgDiv.innerHTML ="<h1 style='color:"+ finalMessage['color'] +"; font-size:60px; padding:20px' >"+finalMessage['message']+"</h1>"
botDiv.innerHTML ="<img src='"+ imagesdatabase[computerImageChoice] +"' height=300 width=300 style='box-shadow:10px 10px 10px 20px red;'>"

document.getElementById('flex-rps-game-div').appendChild(humanDiv);
document.getElementById('flex-rps-game-div').appendChild(msgDiv);
document.getElementById('flex-rps-game-div').appendChild(botDiv);
}
