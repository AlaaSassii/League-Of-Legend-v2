import React ,{useState , useEffect} from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import PlayerSignleChampion from './PlayerSignleChampion'
const PlayerChampions = ({data}) => {
    const [champions, setChampions] = useState([]) 
    const {id , accountId , Key_Api } = data ; 
    useEffect(()=>{
        const Link = `https://euw1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?api_key=${Key_Api}`
        axios(Link)
            .then(resp => {console.log(resp.data.slice(0,5).length);setChampions(resp.data.slice(0,5))})
            .catch(err => console.log(Link))
    },[accountId , id])
  return (
    <Table  striped bordered hover >
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Pts</th>
        <th>mastery</th>
      </tr>
    </thead>
    <tbody>
      {champions.length > 0  ? 
      champions.map((champ,index)=>
    <PlayerSignleChampion key={index} champId={champ.championId} championPoints={champ.championPoints} championLevel={champ.championLevel} lastPlayTime={champ.lastPlayTime}
/>) 
      :
      <tr>
      <td>none</td>
      <td>none</td>
      <td>none</td>
      <td>none</td>
    </tr>
    }
    </tbody>
  </Table>
  )
}

export default PlayerChampions