import React from 'react'

const BackgroundInfo = ({Image ,id}) => {
  return (
     
    <div  className="background-info" style={{ background:` url('http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg') no-repeat top/cover`}}>

    </div>
  )
}

export default BackgroundInfo