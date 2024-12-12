import devs from './../../Data/DevData.json'
import { Link } from 'react-router-dom'
import './ComProfile.css'
import { useState } from 'react'
export const DevPage = () => {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
      setCount(c => c+1)
  }
  const resumeList = devs.map(dev=>
    <li key={dev.id} className='company-card'>
      <Link to={`/Devs/${dev.id}`} state={{dev}}>
        <div className="thumb-container">
          <img src={dev.img} alt="pic" />
        </div>
        <div className="card-info">
          <h2>{dev.name}</h2>
          <h3>{dev.job}</h3>
        </div>
      </Link>

    </li>
  )
  return (
    <>
      <div className="section">
        <ul className='resumeList'>{resumeList}</ul>
      </div>
      <div className="vouchsec">
      <h3>Vouch: {count}</h3>
      <button className="vouch" onClick={incrementCount}>Vouch</button>
      </div>
    </>
  )
}