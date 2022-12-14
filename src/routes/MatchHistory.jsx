import React, { useState , useEffect} from 'react'
import PlayerData from '../ChamCompts/PlayerData';
import axios from 'axios' ; 
import Navbar from '../components/Navbar'
const MatchHistory = () => {
    const [data, setData] = useState({}) ; 
    const [value, setValue] = useState("") ; 
    const [danger ,setDanger]  = useState(false) ; 
    const [error,setError] = useState(false) ; 
    const Key_Api = "RGAPI-aa801574-3697-4500-8f30-a3a6aac72659"   ; 

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
    <>
    <Navbar/>
        { error && <div className='error-message' >Data not Found </div> }
        { danger && <div className='error-message '>There is no name to search</div> } 
        <div className='inputMatch'>
        <input className='' type="text" placeholder='search platyer' value={value}  onChange={(e) =>setValue(e.target.value) }/>
        <button onClick={value ? (e) => handleSubmit(e) : () => setDanger(true) }>search</button>
        </div>
        {
            Object.values(data).length > 0  && <PlayerData {...data}  Key_Api={Key_Api}/>
        }
    </>
  )
}

export default MatchHistory