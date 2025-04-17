import React from 'react'
import { sendGameEvent } from '../services/fluvioClinet'

const StreamButton = () => {

    const handleCLick = ()=>{
        sendGameEvent('game/zone_updates',{
            zone: 'Z24',
            playerId: 'player123',
            timestamp :Date.now()
        })
    }
  return (
    <button onClick={handleCLick}>Stream Zone‑Capture Event</button>
  )
}

export default StreamButton