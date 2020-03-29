import React from 'react'

const css = {
  "wrapper": {
    "paddingTop": "50px",
    "background": "#ECEFF1",
    "height": "100%",
    "display": "flex",
    "flexFlow": "row wrap",
    "padding": "20px",
    "justifyContent": "space-around",
    "alignContent": "flex-start",
    "overflow": "auto"
  }
}

const Wrapper = (props) => {
  return (
    <div className="wrapper" style={css.wrapper}>
      {props.children}
    </div>
  )
}

export default Wrapper
