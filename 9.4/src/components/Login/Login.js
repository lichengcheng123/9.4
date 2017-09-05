import React, { Component } from 'react'
import './login.css'
import Button from '../button/Button'

class Login extends Component {
  render () {
    return (
      // <div className='login'>
      //   Login
      //   <Button text='登录' />
      // </div>
      <div className='login'>
        Login
        <Button>登录</Button>
      </div>
    )
  }
}

export default Login
