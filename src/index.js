import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';



function App() {

  const [display, setIsVisible] = useState(false);

  const seeMore = () => {
    setIsVisible((seemore) => !seemore);
  };

  return (

    <div>
    <div className="laptop">

      {/* header and button */}
       <div className="HeaderButton">

          <h1>Winter Is Coming</h1>

          <button onClick={seeMore}>
            {display ? "See less" : "See more"}
          </button>

       </div>
      
      {/* default images */}
      <div className="Images">
          <img src="./1.jpg"/>
          <img src="./2.jpg"/>
          <img src="./3.jpg"/>
          <img src="./4.jpg"/>
          <img src="./5.jpg"/>
      </div>
      
      {/* more images */}
      {display && (

        <div className="Images">
          <img src="/6.jpg"/> 
          <img src="/7.jpg"/> 
          <img src="/9.jpg"/> 
          <img src="/8.jpg"/> 
          <img src="/10.jpg"/> 
        </div>
        
      )}
      
      
  
    </div>

    <div className="mobDiv">
    <h2>Winter Is Coming</h2>

       {/* default images */}
       <div className="Images">
          <img src="./1.jpg"/>
          <img src="./2.jpg"/>
          <img src="./3.jpg"/>
          <img src="./4.jpg"/>
      </div>

      <button onClick={seeMore}>
            {display ? "See less" : "See more"}
      </button>

      {display && (
        <div className="Images">      
          <img src="/7.jpg"/> 
          <img src="/6.jpg"/> 
          <img src="/9.jpg"/> 
          <img src="/8.jpg"/> 
        </div>

    )}
    </div>

    </div>
   
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

