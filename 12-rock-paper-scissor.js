
let score = JSON.parse(localStorage.getItem('score'))||{
    wins:0,
    lose :0,
    tie : 0
 };

updateScoreElement();
//    if(!score){
//      score = {
//         wins:0,
//         lose :0,
//         tie : 0
//      };
//    }


 let isAutoplaying = false;
 let intervaId;
//  const autoPlay = ()=>{}
 function  autoPlay(){
      if(!isAutoplaying){
 intervaId = setInterval(()=>{
       const playerMove = pickeComputerMov();
       playGame(playerMove);
      },1000);
      isAutoplaying = true;
  }else{
      clearInterval(intervaId);
      isAutoplaying = false;
  }
}

document.querySelector('.js-rock-button')
  .addEventListener('click' ,()=>{
      playGame('rock');
  });

  document.querySelector('.js-paper-button')
    .addEventListener('click',()=>{
      playGame('paper');
    });

document.querySelector('.js-scissor-button')
 .addEventListener('click' ,()=>{
      playGame('scissor');
 });

document.body.addEventListener('keydown' ,(event)=>{
     if(event.key==='r'){
      playGame('rock');
     }
     else if(event.key ==='p'){
      playGame('paper')
     }
     
     else if(event.key ==='s'){
      playGame('scissor')
     }

})

function playGame(playerMove){

    const computerMove = pickeComputerMov();
    
    let result = '';

    if(playerMove === 'scissor'){
        if(computerMove === 'rock'){
         result = 'You lose.'
    }else if(computerMove === 'paper'){
          result = 'You win.'
    }else if(computerMove === 'scissor'){
          result = 'Tie.'
   }
}else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
         result = 'You win.'
    }else if(computerMove === 'paper'){
          result = 'Tie.'
    }else if(computerMove === 'scissor'){
          result = 'You lose.'
   }
} else  if(playerMove === 'rock'){
        if(computerMove === 'rock'){
         result = 'Tie.'
    }else if(computerMove === 'paper'){
          result = 'You lose.'
    }else if(computerMove === 'scissor'){
          result = 'You win.'
   }
}

if (result === 'You win.'){
score.wins += 1;
}else if (result === 'You lose.'){
score.lose += 1;
}else if (result === 'Tie.'){
score.tie += 1;
}

localStorage.setItem('score' ,JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;
document.querySelector('.js-moves').innerHTML  
= ` You 
<img class="move-icon" src="images/${playerMove}-emoji.png">
<img class="move-icon" src="images/${computerMove}-emoji.png">

Computer` ;


}


function updateScoreElement(){
document.querySelector('.js-score').innerHTML = 
`wins :${score.wins} , loses : ${score.lose} , Ties :${score.tie}`;
}

function pickeComputerMov(){
const randomNumber= Math.random();
let computerMove = '';
if(randomNumber >=0 && randomNumber < 1/3){
  computerMove = 'rock'
}
else if(randomNumber >= 1/3 && randomNumber <2/3){
computerMove = 'paper';
} else if (randomNumber >= 2/3 && randomNumber <1) { 
computerMove ='scissor';
}
return computerMove;  
}
