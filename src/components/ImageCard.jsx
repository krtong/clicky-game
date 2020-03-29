import React from 'react'

const css = {
  "width": "18rem",
  "margin": "20px",
}
const hovercss = {
  css,
    "filter": " grayscale(100%)",
    "boxShadow": "0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)",
    "transition": ".2s"
  }

const ImageCard = (props) => {
  const [hover, isHovering] = React.useState(false);

  return (
    <div className="flex-row">
      <div className="card card-card" style={css}>
        <img 
          alt="..." 
          src={props.cardImage} 
          className="card-img-top" 
          onClick={props.clickCard}
          style={hover ? hovercss : {}}
          onMouseEnter={() => isHovering(true)} 
          onMouseLeave={() => isHovering(false)}
        />
      </div>
    </div>
  )
}

export default ImageCard
