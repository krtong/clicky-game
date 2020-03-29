import React from 'react'

const css = {
  "header": {
    "backgroundColor": "#2c323c",
    "backgroundImage": `url("./assets/img/backgroundImage.png")`,

    "backgroundRepeat": "repeat",
    "color": "#fff",
    "minHeight": "400px",
    "padding": "180px 20px",
    "paddingBottom": "140px",
    "textAlign": "center",
    "backgroundSize":"100%",
    "backgroundPosition":"50% 50%",
  },
  "jumbotron": {
    "backgroundColor": "rgb(216, 216, 216)",
    "color": "black"
  }
}

const Jumbotron = () => {
  return (
    <div className="header" style={css.header}>
      <div 
      className="jumbotron jumbotron-fluid" 
      style={css.jumbotron}>
        <div className="container">
          <h1 className="display-4">
            Oh Hey, its the ole Pick a Rick
          </h1>
          <p>Click on an image to earn points, but be careful not to pick any image twice!</p>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
