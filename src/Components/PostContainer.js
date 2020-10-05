import React from 'react'
import Post from './Post'
import Edit from './Edit'

class PostContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      isEditing: false,
      likeCount:0
    }
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  handleLike = () => {
    this.setState({
      likeCount : this.state.likeCount +1,
    })
  }

  render() {
    return this.state.isEditing ? (
      <Edit
        handleEdit={this.props.handleEdit}
        post={this.props.post}
        toggleEdit={this.toggleEdit}
      />
    ) : (
      <Post
        handleDelete={this.props.handleDelete}
        handleLike ={this.handleLike}
        post={this.props.post}
        toggleEdit={this.toggleEdit}
        likeCount = {this.state.likeCount}
      />
    ) 
  }
}

  
export default PostContainer
