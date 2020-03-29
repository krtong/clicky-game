import React from 'react'
const css = (function () {
  const li = {
    "display": "inline-block",
    "padding": "26px 0",
    "width": "30%",
  }
  const css = {
    li,
    "navbar": {
      "background": "#59007c",
      "minHeight": "70px",
      "position": "fixed",
      "width": "100%",
      "boxShadow": "0 3px 28px rgba(0,0,0,.25), 0 3px 10px rgba(0,0,0,.22)",
      "color": "#fff",
      "fontSize": "calc(10px + 14 * (100vw - 320px)/ 800)",
      "zIndex": "100"
    },
    "ul": {
      "width": "100%",
    },
    "score": {
      ...li,
      "float": "right"
    },
    "brand": {
      ...li,
      "fontWeight": "bold"
    }
  }
  return css;
})()

const NavBar = (props) => {
  return (
    <div>
      <nav style={css.navbar}>
        <ul style={css.ul}>
          <li style={css.brand}>Rickle Clicker<span role='img'>🥒</span></li>
          <li style={css.li}>Click an image to begin!</li>
          <li style={css.score}>Score: {props.score} | Top Score: {props.highScore}</li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
