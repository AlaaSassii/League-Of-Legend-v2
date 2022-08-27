import React from 'react'

const Abilities = ({spells,passive}) => {
    const {image ,description ,name} = passive
    // const {cooldownBurn, costBurn,tooltip} = spelles
    // description,name,image => spelles
  return (
    <div className='abilities'>
        <span>
        <img className="passive" src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/passive/${image.full}`} alt={image.group} /> 
        <div className="info-abilities">
            <h5><span style={{fontWeight:"bold"}}>name</span> :{name}</h5>
            <p>description : {description}</p>      
        </div>
        </span>
        {spells.map((spelle,index)=>{
            const {cooldownBurn, costBurn,tooltip,image ,description ,name} = spelle 
            return(
                <span className="abilityy">
                    <img className={`ability${index}`} src={`http://ddragon.leagueoflegends.com/cdn/12.10.1/img/spell/${image.full}`} alt={image.group} /> 
                    <div className={`info-abilities${index}`}>
                        <p><h5>name</h5>:{name}</p>
                        <p><h5>description</h5>:{description}</p>
                        <p><h5>tooltip</h5>:{tooltip}</p>
                        <p><h5>cooldownBurn</h5>:{cooldownBurn}</p>
                        <p><h5>costBurn</h5>:{costBurn}</p>
                    </div>
                </span>
            )
        })}
    </div>
  )
}

export default Abilities