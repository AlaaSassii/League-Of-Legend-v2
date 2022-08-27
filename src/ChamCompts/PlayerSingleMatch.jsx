import React,{useState , useEffect} from 'react'
import axios from 'axios' 
import PlayerSingleMatchData from './PlayerSingleMatchData';
const PlayerSingleMatch = ({data}) => {
    const {puuid, Key_Api,match} = data ; 
    const [matchData , setMatchData] = useState({}) ; 
    useEffect(()=>{
        const Link = `https://europe.api.riotgames.com/lol/match/v5/matches/${match}?api_key=${Key_Api}`
        axios(Link)
            .then(resp =>{ setMatchData(resp.data);console.log('resp',resp.data)})
            .catch(err => console.log(err))
        
    },[puuid,match])
  return (
    <>
     {JSON.stringify(matchData) != '{}'?
    
    <>
    {matchData.info.participants.find(player=>player.puuid === puuid).win  ? 
    <div  className='match' variant={'success'}>
    <div>
    <h3 >{matchData.info.gameMode}</h3>
    <h3 >
        {matchData.info.participants.find(player=>player.puuid === puuid).win ? 'Victory' : 'Defeat' }
    </h3>
    </div>
    <PlayerSingleMatchData {...matchData.info} puuid={puuid}/>
    </div>   
    : 
    <div  className='match' variant={'danger'}>
    <div>
    <h3 >{matchData.info.gameMode}</h3>
    <h3 >
        {matchData.info.participants.find(player=>player.puuid === puuid).win ? 'Victory' : 'Defeat' }
    </h3>
    </div>
    <PlayerSingleMatchData {...matchData.info} puuid={puuid}/>
    </div> 
}
    </>
    
    
    :
    <div>Loading...</div>
    }</>
  )
}

export default PlayerSingleMatch