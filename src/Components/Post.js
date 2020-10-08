import React from 'react'
import { connect } from 'react-redux'

const Post = (props) => {
  return (
    <li className="post-container">
      <div>
        <p className="post-text">{props.post.content}</p>
      </div>

      <div className="post-buttons">
        {props.user.id === props.post.author_id && (
          <button
            className="input-container-button-small"
            onClick={() => {
              props.toggleEdit()
            }}
          >
            Edit
          </button>
        )}
        {props.user.id === props.post.author_id && (
          <button
            className="input-container-button-small"
            onClick={() => {
              props.handleDelete(props.post.id)
            }}
          >
            Delete
          </button>
        )}
      {props.user.id === props.post.author_id && (
          <button
            className="like-button"
            onClick={() => {
              props.handleLike(props.post.id)
            }}
          >
            Like {props.likeCount}
            
          </button>
          
        )}
        {props.user.id === props.post.author_id && (
          <div
            className="profile-pic"
            onClick={() => {
              props.handleLike(props.post.id)
            }}
          >
            {/* Like {props.likeCount} */}
            
          </div>
          
        )}
        <div class="post-by"> 
          Posted By: {props.user.email}
        </div>
        
      </div>
    </li>
  )
}

const mapStateToProps = (reduxState) => reduxState

export default connect(mapStateToProps)(Post)