import React, { useState } from 'react'





function GameBoard({onSelectSquare, gameBoard}) {
 
  return (
    <ol id='game-board'>
       { gameBoard?.map((row, rowIndex)=>{
        //console.log('row', row)
          return ( <li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex)=>{
                         return (<li key={colIndex}>
                            <button onClick={()=>onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol}>{playerSymbol}</button>
                        </li>)
                    })}
                </ol>

            </li>)
       })}
    </ol>
  )
}

export default GameBoard