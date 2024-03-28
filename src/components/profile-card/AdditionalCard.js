import React, { useState } from 'react';

const AdditionalCard = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [showColorOptions, setShowColorOptions] = useState(false);
    
    const toggleBackgroundColor = (color) => {
        setBackgroundColor(color);
        setShowColorOptions(false);  
    };
    
    const toggleColorOptions = () => {
        setShowColorOptions(!showColorOptions);
    };

    return (
        <div className="card" style={{ width: "1000px", height: "600px", backgroundColor }}>
            <div className="card-body text-center">
                <div className="btn-group" role="group" aria-label="Background Color" style={{ position: "absolute", top: "10px", right: "10px", display: "flex", flexDirection: "column" }}>
                    <button type="button" className="btn btn-secondary" onClick={toggleColorOptions} style={{ borderRadius: "50%", width: "30px", height: "30px", backgroundColor: "transparent", marginBottom: "5px",  border: "1px solid black" }}><i class="bi bi-plus"></i></button>
                    {showColorOptions &&
                        <>
                            <button type="button" className="btn btn-secondary" onClick={() => toggleBackgroundColor('black')} style={{ borderRadius: "50%", width: "30px", height: "30px", backgroundColor: "black", marginBottom: "5px", border: "none" }}></button>
                            <button type="button" className="btn btn-secondary" onClick={() => toggleBackgroundColor('white')} style={{ borderRadius: "50%", width: "30px", height: "30px", backgroundColor: "white", marginBottom: "5px", border: "none" }}></button>
                            <button type="button" className="btn btn-secondary" onClick={() => toggleBackgroundColor('beige')} style={{ borderRadius: "50%", width: "30px", height: "30px", backgroundColor: "beige", border: "none" }}></button>
                        </>
                    }
                </div>
                <h5 className="card-title">stroy Title</h5>
                <p className="card-text">"story description"</p> 
            </div>
        </div>
    );
};

export default AdditionalCard;
