import React, { useState } from 'react'

function Player({name, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(name);
    const [flag, setFlag] = useState(false)

    const changeStat=()=>{
        setFlag(falg => !flag);
        if (flag) onChangeName(symbol, playerName)
        
    }
   const changeName =(e)=>{
        setPlayerName(e.target.value)
       
   }
  return (
        
        <li className={isActive ? 'active': undefined}>
            <span className='player'>
            {
                flag ? <input onChange={e=> changeName(e)} value={playerName}/>:<span className="player-name">{playerName}</span>
            }
            
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={changeStat}>{flag ? 'Save':'Edit'}</button>
        </li>
       
  )
}

export default Player