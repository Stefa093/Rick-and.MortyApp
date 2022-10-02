import React from 'react'

const FilterList = ({suggestedList, setSearch}) => {

    const handleClick = id => setSearch(id)

  return (
    <ul className='card__filter'>
        {
            suggestedList?.map(location => 
            <li className='card__fil-list'
            onClick={() => handleClick(location.id)}
            key={location.id}>{location?.name}
            </li>
            )
        }
    </ul>
  )
}

export default FilterList