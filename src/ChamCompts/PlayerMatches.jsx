import React,{useState,useEffect} from 'react'
import axios from 'axios'
import PlayerSingleMatch from './PlayerSingleMatch';
const PlayerMatches = ({data}) => {
    const {puuid , Key_Api} = data
    const [Matches,setMatches] = useState('') ; 
    const [num,setNum] = useState(5)
    
    useEffect(()=>{
        const Link = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?api_key=${Key_Api}` 
        console.log(Link)
        axios(Link)
            .then(resp => setMatches(resp.data.slice(0,10))) 
            .catch(err => console.log("err",err)) 

    },[num , puuid])

  return (
    <div className="matches">
        {Matches.length  > 0 && 
        Matches.map((match,index)=> <PlayerSingleMatch key={index} data={{puuid, Key_Api,match}}/> )
        }
    </div>
  )
}

export default PlayerMatches