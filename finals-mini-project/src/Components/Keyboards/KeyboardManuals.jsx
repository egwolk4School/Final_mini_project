import { useLocation } from "react-router-dom";

export const KeyboardManuals = () => {
    const location = useLocation();
    const keyboard = location.state.keyboard;

    return (
        <>
            <div className="text-content">
               
                <div className="text-section">
                    <h3>Setup</h3>
                    {keyboard.manual[0]?.setup?.map((item, index) => (
                        <div key={index}>
                            <h4>{item.val1}</h4>
                            <ul>
                                {item.val2.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    )) || <p>No setup information available.</p>}
                </div>

                
                <div className="text-section">
                    <h2>Usage</h2>
                    {keyboard.manual[1]?.usage?.map((item, index) => (
                        <div key={index}>
                            <h4>{item.val1}</h4>
                            <ul>
                                {item.val2.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    )) || <p>No usage information available.</p>}
                </div>

            
                <div className="text-section">
                    <h2>Troubleshooting</h2>
                    {keyboard.manual[2]?.troubleshooting?.map((item, index) => (
                        <div key={index}>
                            <h4>{item.val1}</h4>
                            <ul>
                                {item.val2.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    )) || <p>No troubleshooting information available.</p>}
                </div>

                <div className="text-section">
                    <h2>Maintenance</h2>
                    {keyboard.manual[3]?.maintenance?.map((item, index) => (
                        <div key={index}>
                            <h4>{item.val1}</h4>
                            <ul>
                                {item.val2.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    )) || <p>No maintenance information available.</p>}
                </div>
            </div>
        </>
    );
};
