import React, { useContext } from 'react'
import Button from './Button'
import DbContext from '../Context/sharedContext'
function Card(props) {
    const {
        requestStartDbObj,
    } = useContext(DbContext)
    return (
        <div>
            <h1>{props.data.name}</h1>
            <Button status={props.data} text={requestStartDbObj} />
        </div>
    )
}

export default Card
