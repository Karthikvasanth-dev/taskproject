import React from 'react'
import Teacher from './Teacher'

export default function Home() {
  return (
    <div className="page student-page">
    <h2>Teacher Details</h2>
    <Teacher name="Seetha" age={45} Exp={15}/>
    </div>
  )
}
