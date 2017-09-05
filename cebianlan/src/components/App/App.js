import React, { Component } from 'react'
import './app.css'


class App extends Component {
  state={
    active:false
  }
  handleClick=()=>{
    this.setState({
      active:!this.state.active
    })
  }
  render () {

    return (
      <div className='app'>
        <div className={`box ${this.state.active && 'active'}`}></div>
        <div className='button'
          onClick={this.handleClick}>
          Df
        </div>
      </div>

   )
  }

}

export default App
