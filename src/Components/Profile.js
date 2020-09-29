import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { logoutUser } from '../ducks/authReducer'

const Profile = (props) => {
  const logout = () => {
    axios.delete('/auth/logout').then(() => {
      props.logoutUser()
      props.history.push('/')
    })
  }

  return (
    <div>
      <p>{props.user.id}</p>
      <p>{props.user.email}</p>
      <button
        onClick={() => {
          logout()
        }}
      >
        Log out
      </button>
    </div>
  )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps, { logoutUser })(Profile)