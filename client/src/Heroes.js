import React from 'react'

const Heroes = ({heroes}) => 
  <div>
    <h1>Heroes</h1>
    {
      heroes.map(hero => {
        return(
          <p>{hero.name}</p>
        )
      })
    }
  </div>


export default Heroes