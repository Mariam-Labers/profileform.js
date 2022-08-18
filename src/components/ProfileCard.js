
import React from 'react'

function profilecard({ card }) {
  
  return (
    <div className='greenCard'>
      <h3>{card.fishname} {<card.lastname}</h3>
      <p>{card.email}</p>
      <p>{<card.phone}</p>
    </div>
    
  )
}

export default profilecard