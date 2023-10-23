const statusDisplay = document.querySelectorAll('.header-turn');

  gameState = ['','','','','','','','','']
  winings = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  function win_messenge() {
    Swal.fire(
      `El Ganador es ${currentPlayer}`,
      'FELICITACIONES',
      'success'
    ).then(() => {
      handleResetGame(); 
    });
  }

  draw = () => Swal.fire('El Juego ha Quedado Empate')
  current_player_turn = () => `${currentPlayer} TURN`

  let currentPlayer = 'X';
  let gameActive = true;

function main() {
  handleStatusDisplay(current_player_turn());
  listeners();
}
main();

function handleStatusDisplay(message) {
  statusDisplay[0].innerHTML = message; 
}
function listeners() {
  document.querySelector('.game-container-game').addEventListener('click', handleCellClick);
  document.querySelector('.header-reset').addEventListener('click', handleResetGame);
}
function handleResetGame() {
  gameActive = true; 
  currentPlayer = 'X';
  restarGameState();
  handleStatusDisplay(current_player_turn());
  document.querySelectorAll('.box-game').forEach(cell => cell.innerHTML = '');
}
function restarGameState(){
  let i = gameState.length
  while (i--){
    gameState[i] = ''
  }
}
function handleCellClick(clickedEvent) {
  const clickedCell = clickedEvent.target;
  if(clickedCell.classList.contains('box-game')){
    const clickedCellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell)
    console.log(clickedCellIndex);
    if(gameState[clickedCellIndex] !== '' || !gameActive){
      return 
    }
    handleCellPlayed(clickedCell,clickedCellIndex)
    handleResultValidation()
  }
}

function handleCellPlayed(clickedCell,clickedCellIndex){
  gameState[clickedCellIndex] = currentPlayer
  clickedCell.textContent = currentPlayer
}
function handleResultValidation(){
  let roundWon = false
  for(let i = 0; i < winings.length; i++){
    const winContion = winings[i]
    let position1 = gameState[winContion[0]]
    let position2 = gameState[winContion[1]]
    let position3 = gameState[winContion[2]]
    if(position1 === '' || position1 === '' || position1 === ''){
      continue;
    }
    if(position1 === position2 && position2 === position3){
      roundWon = true
      break
    }
  }
  if(roundWon){
    handleStatusDisplay(win_messenge())
    gameActive = false
    return
  }
  let rounDraw = !gameState.includes('')
  if(rounDraw){
    handleStatusDisplay(draw())
    gameActive = false
    return
  }
  handlePlayerChange()
}
function handlePlayerChange(){
  currentPlayer = (currentPlayer === 'O') ? 'X' : 'O'
  handleStatusDisplay(current_player_turn())
}

