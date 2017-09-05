import React, { Component } from 'react'
import './signup.css'
import Button from '../button/Button'

class Signup extends Component {
  render () {
    return (
      // <div className='signup'>
      //   Signup
      //   <Button text='注册' />
      // </div>
      <div className='signup'>
        Signup
        <Button>注册</Button>
      </div>
    )
  }
}

export default Signup
