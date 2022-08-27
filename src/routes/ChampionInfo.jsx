import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Skins from '../ChamCompts/Skins';
import BackgroundInfo from '../ChamCompts/BackgroundInfo'; 
import Info from '../ChamCompts/Info';
import { useNavigate} from 'react-router-dom'
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
    <div>
        {loading ? <h1>Loading..</h1>: <>
        {/* <h1>{name}</h1> */}

        <BackgroundInfo {...data}/>
        <Info {...data}/>
        <Skins skins={skins} name={name}/>
        </>}    

    </div>
  )
}

export default ChampionInfo