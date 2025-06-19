import React from 'react'
import './index.css'
import padsData from "./pads"
import Pad from './Pad'

export default function AppSound({darkMode}){

    const [pads,  setPads] = React.useState(padsData)



    const padsDisplay = pads.map(pad => (
       <Pad color={pad.color} Idkey={pad.id}/>
    ))

   
    return(
          <main>
            <div className="pad-container">
                {padsDisplay}
            </div>
        </main>
    )
}