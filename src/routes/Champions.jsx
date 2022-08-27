import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';
const Champions = () => {
    let navigate = useNavigate() ; 
    const [v ,setV] = useState('12.10.1') ; 
    const [loading, setLoading] = useState(true);
    const [Champions,setChampions] = useState([]) ;
    const  [Championss,setChampionss] = useState([]);
    const [value , setValue] = useState('') ; 
    const types = ["Assassin","Fighter","Mage","Marksman","Support","Tank"]


    const  filterTypes = (type)=>{
        setValue('') ; 
        const arr = Championss.filter(champ => {
            let condition =false
            console.log(condition)
            for(let i=0;i<champ.tags.length;i++){
                if (champ.tags[i] ===type) condition = true
            }
            if(condition)return true ; else return false 
        })
        console.log(arr)
        setChampions(arr)
    }

    const handleChange = e => {
        setValue(e.target.value)
        const Value = e.target.value 
        setChampions(Championss.filter(champ => champ.name.toLowerCase().includes(e.target.value.toLowerCase()) ))
    }

    useEffect(()=> {
      
        setLoading(true) ; 
        axios(`http://ddragon.leagueoflegends.com/cdn/${v}/data/en_US/champion.json`)
            .then(resp => {
                setChampions(Object.values(resp.data.data)) ;
                setChampionss(Object.values(resp.data.data));
                console.log(Object.values(resp.data.data))
                setLoading(false)
        })
            .catch(err => console.log(err))
    },[])
  return (
    <div className="champions-page">
       
        {
            loading? <h1>Loading...</h1>: <div>
    <div className="champions-buttons">
        <input  value={value} onChange={e => handleChange(e) }
         variant='filled' color="primary" label="type champion name" size='small' className="search-reseach" />
       <div style={{display:"inline",marginTop:"20px"}}>
    <button style={{marginTop:"5px",marginLeft:"5px"}}>
    <div className="options-types-champs" >
        {types.map(type =><button onClick={()=>filterTypes(type)}  key={type}>{type}</button>)}
     
        </div>
    </button>
    </div>

        </div>


            <div  className="champions">
            {Champions.map(champ => {
                return(
                    <div key={champ.id}  onClick={()=>navigate(`/Champions/${champ.id}`)}>
                    <img src={`http://ddragon.leagueoflegends.com/cdn/${v}/img/champion/${champ.image.full}`} />
                    <h4 >
                    {champ.name}
                    </h4>
                    </div>)})}
            </div>
        </div>
        }
    </div>
  )
}

export default Champions