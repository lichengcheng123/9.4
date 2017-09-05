import React, { Component } from 'react'
import './app.css'


class App extends Component {
  //笨办法
  // state={
  //   background:'none'
  // }
  // handleClick=()=>{
  //   this.setState({
  //     background: "yellow"
  //   })
  // }
  //
  // render () {
  //   return (
  //   <div className='app'>
  //     <div onClick={this.handleClick}
  //       style={{background:this.state.background}}
  //     className='c'>
  //       Click Me
  //     </div>
  //   </div>
  //  )
  // }

  //聪明方法
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
      <div onClick={this.handleClick}
        className={`c ${this.state.active && 'active'}`}>
        Click Me
      </div>
    </div>
   )
  }

}

export default App
