import React, { useState , useEffect} from 'react'
import PlayerData from '../ChamCompts/PlayerData';
import axios from 'axios' ; 

const MatchHistory = () => {
    const [data, setData] = useState({}) ; 
    const [value, setValue] = useState("") ; 
    const [danger ,setDanger]  = useState(false) ; 
    const [error,setError] = useState(false) ; 
    const Key_Api = "RGAPI-95a50263-627d-4d98-9a0a-6724a50f9bbf"   ; 

    const handleSubmit = (e)=>{
        const Link = `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${value}?api_key=${Key_Api}`
        axios(Link)
        .then(resp =>{console.log(resp.data) ; setData(resp.data)})
        .catch(err => setError(true)) 
    }

    useEffect(()=>{
        if (danger){
        setTimeout(()=>setDanger(false) ,4000)
        }
        if (error){
        setTimeout(()=>{setError(false);setValue('')} ,4000)
        }
      },[error , danger])
  return (
    <div>
        { error && <h1>Data not Found </h1> }
        { danger && <h1>There is no name to search</h1> } 
        <input type="text" placeholder='search platyer' value={value}  onChange={(e) =>setValue(e.target.value) }/>
        <button onClick={value ? (e) => handleSubmit(e) : () => setDanger(true) }>search</button>
        {
            Object.values(data).length > 0  && <PlayerData {...data}  Key_Api={Key_Api}/>
        }
    </div>
  )
}

export default MatchHistory