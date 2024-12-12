import { useLocation, Route, Routes, Navigate, useNavigate  } from 'react-router-dom'
import { KeyboardDetails, KeyboardManuals, KeyboardReviews  } from './../../Components'
import './Product.css'
import { useState } from "react";
export const Product = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const location = useLocation()
    const navigate = useNavigate();
    const handleTabChange = (index, path) => {
        setActiveIndex(index); // Update active tab index
        navigate(path, { state: { keyboard } }); // Navigate to the path
    };
    const keyboard = location.state.keyboard
  return (
    <>
        <div className="section">
            <div className="product-container">
                <div className="image-container">
                    <img src={keyboard.img} alt="" />
                </div>
                <div className="text-data-container">
                    <div className="mini-nav">
                        <ul>
                            <li>
                                <input
                                    type="radio"
                                    id="radio-1"
                                    name="tabs"
                                    onChange={() => handleTabChange(0, `/Products/${keyboard.id}/Details`)}
                                    checked={activeIndex === 0}
                                />
                                <label htmlFor="radio-1" className="tab">
                                    Details
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="radio-2"
                                    name="tabs"
                                    onChange={() => handleTabChange(1, `/Products/${keyboard.id}/Manuals`)}
                                    checked={activeIndex === 1}
                                />
                                <label htmlFor="radio-2" className="tab">
                                    Manuals
                                </label>
                            </li>
                            <li>
                                <input
                                    type="radio"
                                    id="radio-3"
                                    name="tabs"
                                    onChange={() => handleTabChange(2, `/Products/${keyboard.id}/Reviews`)}
                                    checked={activeIndex === 2}
                                />
                                <label htmlFor="radio-3" className="tab">
                                    Reviews
                                </label>
                            </li>
                            <span
                                className="glider"
                                style={{
                                    transform: `translateX(${activeIndex * 100}%)`,
                                }}
                            ></span>
                        </ul>
                    </div>
                    <div className="main-text-content">
                        <h2>{keyboard.model}</h2>
                        <Routes>
                            <Route index element={<Navigate to="Details" replace state={{ keyboard }} />} />
                            <Route path='Details' element={<KeyboardDetails/>}/>
                            <Route path='Manuals' element={<KeyboardManuals/>}/>
                            <Route path='Reviews' element={<KeyboardReviews/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
