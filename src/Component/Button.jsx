import React, { useContext,useEffect, useState } from 'react'
import DbContext from '../Context/sharedContext'

function Button(props) {
    console.log(props)
    const {
        requestStartDbObj,
        setRequestStartDbObj
    } = useContext(DbContext)
    const [state, setstate] = useState(props.text?.status ?? "start")
    
    useEffect(() => {
        setstate(props.text?.status??"start")
        return () => {
            
        }
    }, [state])
    console.log(requestStartDbObj)
    const start = ()=>{
        setRequestStartDbObj({id:props.status.id, status:"loading"})
        setstate("loading")
        
        setTimeout(()=>{
            setstate("stop")
            setRequestStartDbObj({id:props.status.id, status:"stop"})
        },5000)
    }
    return (
        <div>
            <button onClick={start}>{state}1</button>
        </div>
    )
}

export default Button
