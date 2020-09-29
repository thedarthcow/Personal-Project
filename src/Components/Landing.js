import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../ducks/authReducer'
import { connect } from 'react-redux'
import axios from 'axios'

//TODO Write all methods, connect to store, connect methods to JSX
class Landing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
    //this.handleLogin = this.handleLogin.bind(this)
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleLogin = () => {
    const { email, password } = this.state
    axios
      .post('/auth/login', { email, password })
      .then((res) => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
        alert(err.message)
      })
  }

  render() {
    return (
      <div className="app-body">
        <div className="input-container">
          <div className="flex-horizontal inputs">
            <div className="flex-vertical">
              <input
                maxLength="100"
                placeholder="Enter Email"
                name="email"
                onChange={(e) => {
                  this.handleInput(e)
                }}
              />
              <input
                type="password"
                maxLength="20"
                placeholder="Enter Password"
                name="password"
                onChange={(e) => {
                  this.handleInput(e)
                }}
              />
            </div>
            <button
              onClick={() => {
                this.handleLogin()
              }}
              className="input-container-button"
            >
              Log in
            </button>
          </div>
          <div className="flex-horizontal link">
            <span>Don't have an account? Register here: </span>
            <Link className="input-container-button" to="/register">
              Register
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { loginUser })(Landing)