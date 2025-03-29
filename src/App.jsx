import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./components/winning-combinations"
import GameOver from "./components/GameOver"

const initialGameContent = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]


function App() {
  
  const derivedAcctivePlayer = (gameTurns)=>{
      let activePlayer = 'X';

      if(gameTurns.length> 0 && gameTurns[0].player === 'X'){
        activePlayer = 'O'
      }
      return activePlayer;
  }




  //const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns]= useState([]);
  const [name, setName] = useState({
    X: 'Player1',
    O: 'Player2'
  })
  console.log('name', name)
  const activePlayer = derivedAcctivePlayer(gameTurns)

  const reset=()=>{
    setGameTurns([])//we are restarting the whole board and because we are doing everything with gameTurns we set
    //it to an empty array
  }


  const changeNameHandler = (symbol, chosenName)=>{
    setName( 
      (prevName)=>{
        return {
          ...prevName,
          [symbol]: chosenName //the brackets here make the symbol as a key instead of a string if we put this without the [] then it would return "symbol"
        }
      }
    )
  }

  let gameBoard = [...initialGameContent].map(arr => [...arr]);

  for (const turn in gameTurns){
      const {square, player} = gameTurns[turn]
      const {row, col} = square
      gameBoard[row][col] = player
  }

  let winner;
  let draw = !winner && gameTurns.length === 9
  for(const combination of WINNING_COMBINATIONS){
    //console.log('combination', combination)
    const firstElement = gameBoard[combination[0].row][combination[0].column];
    const secondElement = gameBoard[combination[1].row][combination[1].column];
    const thirdElement = gameBoard[combination[2].row][combination[2].column]
    if(firstElement && firstElement === secondElement && secondElement === thirdElement){
      winner = name[firstElement];
    }
  }

  const handleSelectSquare=(rowIndex, colIndex)=>{

    setGameTurns( 
        (prevTurns)=>{
          const currentPlayer = derivedAcctivePlayer(prevTurns)
          const updatedTurns= [{square: {row: rowIndex, col:colIndex}, player: currentPlayer}, ...prevTurns]
          return updatedTurns;
        }
    )
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
            <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'} onChangeName={changeNameHandler}/>
            <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'} onChangeName={changeNameHandler}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
      </div>
      {(winner || draw )&& <GameOver winner={winner} reset={reset}/>}
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
