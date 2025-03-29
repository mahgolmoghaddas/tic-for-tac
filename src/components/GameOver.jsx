import React from 'react'

function GameOver({winner, reset}) {
  return (
    <div id="game-over">
    {winner ? <p>You win, {winner}</p>: <p>draw happened</p>}
    <button onClick={reset}>Rematch!</button>
    </div>
  )
}

export default GameOver