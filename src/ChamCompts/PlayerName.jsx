import React from 'react'

const PlayerName = ({data}) => { 
  const {name , profileIconId , summonerLevel} = data 
  return (
    <div className='playerName'>
        <h1>Player Name Component</h1>
        <h6>{name}</h6>
        <img className="image-profile" src={`https://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${profileIconId}.png`} />
        <h6>level {summonerLevel}</h6>
    </div>
  )
}

export default PlayerName