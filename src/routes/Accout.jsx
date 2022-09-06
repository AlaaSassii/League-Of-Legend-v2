import React, { useEffect  ,useState } from 'react'
import PostInfo from '../components/PostInfo'
import Profile from '../components/Profile'
import {useParams} from 'react-router-dom'
import AccountPosts from '../components/AccountPosts' 
import { collection,  getDocs } from 'firebase/firestore'
import { database } from '../firebase-config'
import NavAccount from '../components/NavAccount'
const Accout = () => {
    const usersCollectionRef = collection(database,'users')
    const [loading,setLoading] = useState(true) ; 
    const [account ,setAccount] = useState({}) ; 
    console.log(account) ; 
    const {id} = useParams() ; 
    useEffect(()=>{
        const getAccount = async () => { 
            setLoading(true) ; 
            const data = await getDocs(usersCollectionRef) ; 
            const account = data.docs.find(account => account.id === id ) ; 
            setAccount({id : account.id ,...account.data()}) ;
            setLoading(false) 
        }
        getAccount() ; 
    },[]) ;

    if (loading) return <h1>Loading..</h1>
    return (
        <>
        <NavAccount/>
    <div>
        {id}
        <Profile account={account} {...account}/>
        <AccountPosts id={account.id}/>
    </div>
    </>
    )
}

export default Accout