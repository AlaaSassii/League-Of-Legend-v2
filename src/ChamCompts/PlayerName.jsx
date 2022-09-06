import React from 'react'

const PlayerName = ({data}) => { 
  const {name , profileIconId , summonerLevel} = data 
  return (
    <div className='playerName'>
        <img className="image-profile" src={`https://ddragon.leagueoflegends.com/cdn/12.10.1/img/profileicon/${profileIconId}.png`} />
        <div>
        <h3>{name}</h3>
        <h4>level {summonerLevel}</h4>
        </div>
    
    </div>
  )
}

export default PlayerName