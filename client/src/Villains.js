import React from 'react'

const Villains = ({villains}) => {
  <div>
    <h1>Villains</h1>
    {
      villains.map(villain => {
        return(
          <p>{villain.name}</p>
        )
      })
    }
  </div>
}

export default Villains