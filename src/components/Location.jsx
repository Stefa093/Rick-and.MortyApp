import React from 'react'

const Location = ({location}) => {

  return (
    <article className='card__location'>
        <h2 className='card__loc-name'>{location?.name}</h2>
        <ul className='card__loc-list'>
            <li><span>Type: </span>{location?.type}</li>
            <li><span>Dimension: </span>{location?.dimension}</li>
            <li><span>Population: </span>{location?.residents.length}</li>
        </ul>
    </article>
  )
}

export default Location