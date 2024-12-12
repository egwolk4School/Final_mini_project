import { Link } from 'react-router-dom'
import './Keyboard.css'
import propTypes from 'prop-types'
export const Keyboard = (props) => {
   
    const switchColors = {
        'Cherry MX Black': '#302c2c',
        'Cherry MX Blue': '#1a1a77',
        'Cherry MX Speed': '#FF4500',
        'Cherry MX Red': '#fc2323',
    }
    const sizeColors = {
        'Full-Size': '#3add21',
        '75%': '#fc0cac',
        'TKL': '#ac0cfc',
        '60%': '#0cc8fc',
    }
    const getSwitchColor = (switchName) => switchColors[switchName] || '#CCCCCC';
    const getSizeColor = (sizeName) => sizeColors[sizeName] || '#CCCCCC';
    const keyboardList = props.keyboards
    const listKeyboards=keyboardList.map(keyboard=>
        <li key={keyboard.id} className='card'>
            <div className="thumb-container">
                <img src={keyboard.img} alt="pic" className='thumbnail'/> <br />
            </div>
            <div className="card-info">
                <h2 style={{ textShadow: '0 0 1.5px'}}>{keyboard.model}</h2>
                <div className="tags">
                    <p style={{ backgroundColor: getSizeColor(keyboard.size) }}>{keyboard.size}</p>
                    <p style={{ backgroundColor: getSwitchColor(keyboard.switch) }}>{keyboard.switch}</p>
                </div>
                <span className='overview'>{keyboard.ov}</span>
                <div className="button-container">
                    <Link to={`/Products/${keyboard.id}`} state={{keyboard}}><button className="o-btn">View</button> </Link>
                </div>
            </div>
        </li>
    )
  return (
    <>
        <ul className='keyboard-list'>{listKeyboards}</ul>
    </>
  )
}
Keyboard.propTypes={
    keyboards:propTypes.arrayOf(propTypes.shape({
        model:propTypes.string,
        switch:propTypes.string,
        size:propTypes.string,
        img:propTypes.string,
        overview:propTypes.string,
    }))
}
