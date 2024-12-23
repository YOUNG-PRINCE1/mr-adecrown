import React from 'react'
import './PropertyValue.css'

const PropertyValue = () => {
  return (
    <div>
        <div className="row pp gap-2 m-5">
    <div className="col-md-3">
      <center>
        <img className src="./img/Icon Container.png" alt /><br />
        <p>Find Your Dream Home</p></center>
    </div>
    <div className="col-md-3">       
      <center>
        <img src="./img/Icon Container (1).png" alt /><br />
        <p>Unlock Property Value</p> </center>         
    </div>
    <div className="col-md-3">   
      <center>
        <img src="./img/Icon Container (2).png" alt /><br />
        <p>Effortless Property Management</p>   
      </center>    
    </div>
    <div className="col-md-3">
      <center>
        <img src="./img/Icon Container (3).png" alt /><br />
        <p>Smart Investments, Informed Decisions</p> 
      </center>
    </div>
  </div>
    </div>
  )
}

export default PropertyValue