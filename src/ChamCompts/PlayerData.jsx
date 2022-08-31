import React from 'react'
import PlayerChampions from './PlayerChampions'
import PlayerMatches from './PlayerMatches'
import PlayerName from './PlayerName'
import PlayerRank from './PlayerRank'

const PlayerData = ({accountId,id,name,profileIconId,puuid,revisionDate,summonerLevel,Key_Api}) => {
  return (
    <div>
        <PlayerName data={{name , profileIconId , summonerLevel}}/> 
        <PlayerRank  data={{id , Key_Api }}/>  
        <PlayerMatches data={{puuid , Key_Api}}/>
    </div>
  )
}

export default PlayerData