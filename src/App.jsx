import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import Error from './components/Error'
import FilterList from './components/FilterList'
import Location from './components/Location'
import getRandomNumber from './utils/getRandomNumber'

function App() {
  const [location, setLocation] = useState()
  const [search, setSearch] = useState('')
  const [suggestedList, setSuggestedList] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    let id = getRandomNumber()
    if (search) {
      id = search
    }

    const URL = `https://rickandmortyapi.com/api/location/${id}`

    axios.get(URL)
    .then(res => {
      setHasError(false)
      setLocation(res.data)})
    .catch(err => setHasError(true))
  }, [search])

  const handleSubmit = e => {
    e.preventDefault()
    setSearch(e.target.dimensionId.value)
  }

  const handleChange = e => {

    if (e.target.value === '') {
      return setSuggestedList()
    }
    const URL = `https://rickandmortyapi.com/api/location?name=${e.target.value}`

    axios.get(URL)
    .then(res => setSuggestedList(res.data.results))
    .catch(err => console.log(err))
  }
  
  return (
    <div className="App">
      <div className='header1'>
        <div className='header2'></div>
      </div>
      <section className='section__container'>
      <form onSubmit={handleSubmit}
      className='search-box'>
        <input
          id='dimensionId'
          placeholder='Look for a dimension'
          type="text"
          onChange={handleChange}
          className='search-bar'
          />
        <FilterList 
        suggestedList={suggestedList}
        setSearch={setSearch}
      />
      </form>
      {
        hasError ?
        <Error />
        :
      <>
        <Location location={location} />
      <div className='card-container'>
        {
          location?.residents.map(url => (
            <CardResident 
              key={url}
              url={url}
            />
          ))
        }
      </div>
      </>
      }
      </section>
    </div>
  )
    }

export default App
