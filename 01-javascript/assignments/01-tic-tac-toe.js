/*
  This is the first challenge that will help us prepare to create
  a tic-tac-toe website. You are given a couple of different games
  (represented by an array of arrays). Your goal is to complete the
  checkForWinner function to determine IF there is a winner. Determining
  on the status (x won, o won, or cats game) you will return a string
  of the status (see the conditional checks below to see what is expected).
*/



function checkForWinner() {
  return checkForRows(game) && checkForColumns(game) && checkForDiagonals(game)
}
 
  



function checkForRows(game) {
  for(let i = 0; i < game.length; i++) {
    for(let j = 0; j <game[i].length; j++) {
    if(game[i][0] === game[i][1] && game[i][1] === game[i][2]) {
      switch(game[i][0]) {
        case 'x':
        text = 'x'
        break;
        case 'o': 
        text = 'o'
        break;
        default: 
        text = 'cat'
        break;
      }
      }

    }
    
  }
}

function checkForColumns(game) {
  for(i = 0; i < game.length; i++) {
    for(j = 0; j < game[i].length; j++) {
    if(game[0][i] === game[1][i] && game[1][i] === game[2][i]) {
      switch(game[0][i]) {
        case 'x':
        text = 'x'
        break;
        case 'o': 
        text = 'o'
        break;
        default: 
        text = 'cat'
        break;
      }
      }
    }
    
  }
}  

  function checkForDiagonals(game) {
    for(i = 0; i < game.length; i++) {
      for(j = 0; j < game[i].length; j++) {
      if(game[0][0] === game[1][1] && game[1][1] === game[2][2] || game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
        switch(game[0][0]) {
        case 'x':
        text = 'x'
        break;
        case 'o': 
        text = 'o'
        break;
        default: 
        text = 'cat'
        break;
        }

        }
      }
         
    }
  }

  /*
    Hint you need to use a loop, but you will problably need more than one ;-)
    In fact you will probably need a loop inside a loop. Don't forget that
    some variables will need to be created before the loops to track the
    results of what is calculated inside of the loops. this is similar to what
    we did in the first challenge.
  */



function main() {
  let gameOne = [
    [ 'x', 'o', 'x'],
    [ 'x', '-', 'o'],
    [ 'x', '-', 'o']
  ]

  let gameTwo = [
    [ 'o', 'o', 'o'],
    [ '', 'x', ''],
    [ '-', '-', 'x']
  ]

  let gameThree = [
    [ 'o', 'x', 'o'],
    [ 'o', 'x', 'x'],
    [ 'x', 'o', 'x']
  ]

  const gameOneWinner = checkForWinner(gameOne)
  const gameTwoWinner = checkForWinner(gameTwo)
  const gameThreeWinner = checkForWinner(gameThree)

  const checkGameOne = gameOneWinner === 'x'
  const checkGameTwo = gameTwoWinner === 'o'
  const checkGameThree = gameThreeWinner === 'cat'

  if(!checkGameOne && !checkGameTwo && !checkGameThree) {
    console.log('checkForWinner is not working for: \n Any of the examples provided')
  } else if(!checkGameOne && !checkGameTwo && checkGameThree) {
    console.log('checkForWinner is not working for: \n games one and two')
  } else if(!checkGameOne && checkGameTwo && !checkGameThree) {
    console.log('checkForWinner is not working for: \n games one and three')
  } else if(checkGameOne && !checkGameTwo && !checkGameThree) {
    console.log('checkForWinner is not working for:\n games two and three')
  } else if(!checkGameOne && checkGameTwo && checkGameThree) {
    console.log('checkForWinner is not working for:\n game one')
  } else if(checkGameOne && !checkGameTwo && checkGameThree) {
    console.log('checkForWinner is not working for:\n game two')
  } else if(checkGameOne && checkGameTwo && !checkGameThree) {
    console.log('checkForWinner is not working for:\n game three')
  } else {
    console.log("Your code works for all of the examples provided...be careful there are other use cases!!!!")
  }


}

main()
