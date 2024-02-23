
import React from 'react'

const Distance = (props) => {
  return (
    <>
    <div className="main-body-dist">
        <div className="main-distance input-field calc">
        <h3 className="text-align-last:left">Distance</h3>
        <h2 className="calculated-distance">{props.distance}</h2>

        </div>
        <p className="main-distance input-field calc">
        The distance between <strong>{props.origin} </strong> and{" "}
        <strong>{props.destination}</strong> via the seleted route is{" "}
        <strong>{props.distance}s</strong>.{" "}
        </p>
        
        
    </div>
    </>
    
  )
}

export default Distance
