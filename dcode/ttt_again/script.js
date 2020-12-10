var turn_count = 0;
var players = ['X', 'O'];
var board = document.querySelectorAll('td');
var board_values = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

function clearBoard()
{
    // TODO
    // clears the board 
    // the actual Xs and Os
}

function resetGame()
{
    clearBoard(); 

    // TODO
    // resets the rest of the game
    // what else needs to be reset?
}

function gameOver()
{
    // TODO
    // if X wins, return 'X'
    // if O wins, return 'O'
    // if it's a draw, return 'draw'
    // otherwise, return 'none'
    return 'none' // so you can test
    // return 'X'
    // return 'O'
    // return 'draw' 
}

function announceWinner(theWinner)
{
    // TODO
    // if this is working right, 
    // then theWinner should be one of
    // 'X', 'O', or 'draw'
    // announce the winner somehow
    if (confirm('Would you like to play again? '))
    {
        resetGame();
    }
    return true;
}

var foo;

function play(evt)
{
    console.log('play funcion running');
    console.log('turn number ' + turn_count);
    td = evt.target;
    var i = td.dataset['num'] * 1;
    console.log('this appears to be box number ' + i);
    if (board_values[i] != -1)
    {
        console.log('already clicked, returning');
        console.log('still turn ' + turn_count);
        return false;
    }
    var player_num = turn_count % 2;
    console.log('this is player ' + player_num);
    // set the value to 0 or 1
    board_values[i] = player_num;
    // add an X or O
    console.log('so playing an ' + players[player_num]);
    td.innerText = players[player_num];
    var winner = gameOver();
    if (winner != 'none')
    {
        console.log('we have a winner!');
        return announceWinner(winner);
    }
    console.log('no winner yet, increment turn_count');
    turn_count++;
    console.log(turn_count);
    return true;
}

for (let i = 0; i < 9; i++)
{
    board[i].addEventListener("click", play);
}

