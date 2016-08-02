import React, { Component } from "react"
import ReactDOM from "react-dom"

class Validator extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h1>Validator</h1>
    )
  }
}

ReactDOM.render(<Validator/>, document.getElementById("root"))