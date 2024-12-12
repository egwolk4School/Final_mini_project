import { useLocation } from "react-router-dom"

export const KeyboardDetails = () => {
  const location = useLocation()
  const keyboard = location.state.keyboard

  return (
    <>
      <div className="text-content">
        <h4>Overview</h4>
        <p>{keyboard.ov}</p>

        <div className="text-section">
          <h4>Key Features</h4>
          <ul>
            {keyboard.details[0].feats.map((feat, index) => (
              <li key={index}>
                <strong>{feat.val1}:</strong> {feat.val2}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-section">
          <h4>Specifications</h4>
          <ul>
            {keyboard.details[1].specs.map((spec, index) => (
              <li key={index}>
                <strong>{spec.val1}:</strong> {spec.val2}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
