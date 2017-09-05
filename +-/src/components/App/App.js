import React, { Component } from 'react'
import './app.css'


class App extends Component {
  state = {
    count:0
  }
  handleClick=()=>{
    this.setState({
      count:this.state.count + 1
    })
  }
  handleClick1=()=>{
    this.setState({
      count:this.state.count - 1
    })
  }
  render () {
    return (

    <div className='app'>
      <h1>数量:{this.state.count}</h1>
      <div onClick={this.handleClick} className='a'>
        +1
      </div>
      <div onClick={this.handleClick1} className='b'>
        -1
      </div>
    </div>
   )
  }
}

export default App
