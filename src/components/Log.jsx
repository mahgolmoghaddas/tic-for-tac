import React from 'react'

function Log({gameTurns}) {
  return (
    <ol id='log'>
        {gameTurns.map(
          turn => (<>
          <li key={`${turn.square.row}${turn.square.col}`}>{turn.player} selected {turn.square.col} and {turn.square.row}</li>
        
          </>)
        )}
    </ol>
  )
}

export default Log