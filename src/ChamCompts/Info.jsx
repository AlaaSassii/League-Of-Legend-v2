import React from 'react'
import Abilities from './Abilities';
import Tips from './Tips';

const Info = ({id,tags,blurb ,spells,passive,allytips,enemytips}) => {
  return (
    <div className="info">
        <div className="champ-info">
            <img className="champ-image-prof" src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/champion/${id}.png`}/> 
            <div >
            <h1>{id} </h1>
            <p>{blurb}</p>
                <p>
                {tags.map((tag,index) => {if (index === tags.length -1 ) return tag ; else return `${tag} , `}).map(tag => <span>{tag}</span>)}
                </p>
            </div>
        </div>
        <div className="champ-info-foot" style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",}}>
        <Abilities spells={spells}  passive={passive}/>
        <Tips allytips={allytips} enemytips={enemytips}/>
        </div>
    </div>
  )
}

export default Info