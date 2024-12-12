import resumes from '../../Data/Resume.json'
import { Link } from 'react-router-dom'
import './ComProfile.css'
export const ComProfile = () => {
  const resumeList = resumes.map(resume=>
    <li key={resume.id} className='company-card'>
      <Link to={`/CompanyProfile/${resume.id}`} state={{resume}}>
        <div className="thumb-container">
          <img src={resume.img} alt="pic" />
        </div>
        <div className="card-info">
          <h2>{resume.name}</h2>
          <h3>{resume.job}</h3>
        </div>
      </Link>
    </li>
  )
  return (
    <>
      <div className="section">
        <ul className='resumeList'>{resumeList}</ul>
      </div>
    </>
  )
}
