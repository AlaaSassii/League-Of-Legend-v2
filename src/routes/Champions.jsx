import React , {useEffect , useState} from 'react' ;
import axios from 'axios' ;
import Champion from '../ChamCompts/Champion';
import Navbar from '../components/Navbar'

const Champions = () => {
    const [loading, setLoading] = useState(true) ;
    const [value ,setValue] = useState('') ; 
    const [champions ,setChampions] = useState([]) ;
    const [championss ,setChampionss] = useState([]) ; 
    const types = ["Assassin","Fighter","Mage","Marksman","Support","Tank"] ;
    const version = '12.10.1' ; 

    useEffect(()=>{
        axios(`http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`)
            .then(resp => {
                setChampions(Object.values(resp.data.data)) ;
                setChampionss(Object.values(resp.data.data));
                console.log(Object.values(resp.data.data)) ;
            })
    },[]) ; 

    const filterTypes= (type)=>{
        const arr = championss.filter(champ => {
            let condition =false
            console.log(condition)
            for(let i=0;i<champ.tags.length;i++){
                if (champ.tags[i] ===type) condition = true
            }
            if(condition)return true ; else return false 
            })
        console.log(arr)
        setChampions(arr)}

    const handleChange = e => { 
        setValue(e.target.value)
        const Value = e.target.value 
        setChampions(championss.filter(champ => champ.name.toLowerCase().includes(e.target.value.toLowerCase()) )) 
    }
  return (
    <>
    <Navbar/>
    <div className='ChampionsList'>
        <div className='container'>
        <div className='inputs'>
        <input type="text" placeholder='text' onChange={e =>handleChange(e)} value={value} />
        {types.map(type =><button onClick={()=>filterTypes(type)}  key={type}>{type}</button>)}
        </div>
        {
            champions.length ?
            <div className='Champions'>
                <div className='container'>
                    {
                    champions.map((champion,index)=>{
                    const {id , blurb , image} = champion
                    return(<Champion key={id} id={id} blurb={blurb} image={image}/>) ;
                })
                    }
                </div>
            </div>
            :
            <h1>No Data</h1>
        }
        </div>
    </div>
    </>
  )
}

export default Champions