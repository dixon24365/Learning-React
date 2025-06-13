import { useState } from 'react'
import Entry from '../Travel_journal/entry'
import Header from '../Travel_journal/Header'
import data from '../Travel_journal/data'

function AppTravel() {

  const journalData= data.map((Jdata)=>{
   return (<Entry img={Jdata.img}
   country={Jdata.country}
   title={Jdata.title}
   googleMapsLink={Jdata.googleMapsLink}
   dates={Jdata.dates}
   text={Jdata.text}
   />)

  })
  return (
    <>
    <Header/>
   {journalData}
    </>
  )
}

export default AppTravel
