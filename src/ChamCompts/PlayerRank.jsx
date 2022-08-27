import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import { FaSortDown , FaSortUp } from "react-icons/fa";
const PlayerRank = ({data}) => {
    const {Key_Api , id } = data
    const [rank, setRank] = useState('')
    useEffect(()=>{
        const Link = `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${Key_Api}`
        axios(Link)
        .then(resp =>{console.log(resp.data) ;setRank(resp.data)})
        .catch(err => console.log(err))
    },[id])
  return (  
    <div className='Rank'>
        {   
        rank.length >0 ?
        <>
        {
                rank.length >1 ? 
                <div>
                <h3>Solo/duo</h3>
                <img  className='ranks' src={`https://opgg-static.akamaized.net/images/medals_new/${rank[1].tier}.png?image=q_auto,f_webp,w_144&v=1654157118674`}/> 
                <p>{`${rank[1].tier} ${rank[1].rank} ${rank[1].leaguePoints}LP`}</p>
            <div style={rank[1].wins / (rank[1].wins + rank[1].losses) * 100 > 55 ? {color:'#57CC99'} :rank[1].wins / (rank[1].wins + rank[1].losses)* 100 < 50 && {color:"rgb(174, 0, 0)",display:'felx',alignItems:"center"} }>
                {rank[1].wins / (rank[1].wins + rank[1].losses) * 100 > 60 && <FaSortUp/> }
            {rank[1].wins / (rank[1].wins + rank[1].losses) * 100 < 50 && <FaSortDown/>}
            {(rank[1].wins / (rank[1].wins + rank[1].losses) * 100 ).toFixed(2) }%
            </div>
                </div>
                :
            <div>
                <h3>Rank flex</h3>
                <p>Unranked</p>
            </div>
            }
        {
            Object.values(rank[0]).length > 0 ? 
            <div>
                 <h3>Flex</h3>
        <img className='ranks' src={`https://opgg-static.akamaized.net/images/medals_new/${rank[0].tier}.png?image=q_auto,f_webp,w_144&v=1654157118674`}/> 
        <p>{`${rank[0].tier} ${rank[0].rank} ${rank[0].leaguePoints}LP `}</p>
        <div style={rank[0].wins / (rank[0].wins + rank[0].losses) * 100 > 55 ? {color:'#57CC99'} :rank[0].wins / (rank[0].wins + rank[0].losses)* 100 < 50 && {color:"rgb(174, 0, 0)",display:'felx',alignItems:"center"} }
        >
            {rank[0].wins / (rank[0].wins + rank[0].losses) * 100 > 60 && <FaSortUp/> }
            {rank[0].wins / (rank[0].wins + rank[0].losses) * 100 < 50 && <FaSortDown/>}
            {(rank[0].wins / (rank[0].wins + rank[0].losses) * 100 ).toFixed(2) }%
            </div>
            </div> 
            :
            <div>
            <h3>Rank flex</h3>
            <p>Unranked</p>
            </div>
        }

        </>
        :
        <>
        <div>
            <h3>Rank flex</h3>
            <p>Unranked</p>
         </div>
        <div>
            <h3>Rank flex</h3>
            <p>Unranked</p>
         </div>
        </>
        }
    </div>
  )
}

export default PlayerRank