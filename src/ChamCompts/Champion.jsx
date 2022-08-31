import React from 'react'
import { useNavigate } from 'react-router-dom' ;
const Champion = ({id , blurb , image}) => {
  let navigate = useNavigate() ; 
  return (
    <div className="box" onClick={()=>navigate(`/Champions/${id}`)}>
            <div class="box-child-1">
                <img src={`http://ddragon.leagueoflegends.com/cdn/12.16.1/img/champion/${id}.png`} alt=""/>
            </div>
            <span >{id}</span>

            <div class="box-child-2">
                <div>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`} alt=""/>
                </div>
                <div>
                    <h5>{id}</h5>
                    <p>{blurb}</p>
                </div>
            </div>
    </div>
  )
}

export default Champion