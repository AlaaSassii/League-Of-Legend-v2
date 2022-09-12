import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Skins from '../ChamCompts/Skins';
import BackgroundInfo from '../ChamCompts/BackgroundInfo'; 
import Info from '../ChamCompts/Info';
import { useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar'

const ChampionInfo = () => { 
  
    let {id} = useParams() 
    const [loading, setLoading] = useState(true) ; 
    const [data , setData] = useState({}) ; 
    useEffect(()=> {
        setLoading(true)
        axios(`http://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/${id}.json`)
            .then(resp => {
                // console.log(resp.data.data[id]) ; 
                setData(resp.data.data[id])
                setLoading(false)
                    }) 
            .catch(err => console.log(err))
    },[id])
    const {skins,spells,name,image} = data 
   
   return (
    <>
    <Navbar/>
    <div className='champions-info'>
      <div className='container'>
        {loading ?
         <h1>Loading..</h1>
         : 
        <>
        <Info {...data}/>
        <Skins skins={skins} name={name}/>
        </>
        
        }    
      </div>
    </div>
    </>
  )
}

export default ChampionInfo