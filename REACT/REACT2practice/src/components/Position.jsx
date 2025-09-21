import { useState } from 'react'
import './Position.css'

export default function Position(){
    const [position,setPosition] = useState()
    return(
        <>
            <button className="box" onClick={() => setPosition("X")}>
                {position}
            </button>
        </>
    )
}