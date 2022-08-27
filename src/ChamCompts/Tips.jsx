import React from 'react'

const Tips = ({allytips,enemytips}) => {
  return (
    <div style={{display:"flex",alignItems:'',flexDirection:"column",justifyContent:"center"}}>
    <div>
    {
        allytips.length > 0 && 
        <>
        <h3>ally tips</h3>
       { allytips.map(tip => <li key={tip}>{tip}</li>
        )}
        </>
    }
    </div>
    <div>
        {
          enemytips.length > 0 && 
          <>
          <h3>enemy tips</h3>
         { enemytips.map(tip => <li key={tip}>{tip}</li>
          )}
          </>
        }
    </div>
    </div>
  )
}

export default Tips