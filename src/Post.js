import React, { Component } from 'react';
import {connect} from 'react-redux';

class Post extends Component {
  handleIt=(e)=>{
    console.log('edit')
    
    this.props.editable(true)
    // window.location.reload()
  }
  render() {
  return (
    <div className="post">
      <h2 className="post_title">{this.props.post.title}</h2>
      <p className="post_message">{this.props.post.message}</p>
      <div className="control-buttons">
      <button className="edit"
      onClick={this.handleIt}>
         Edit</button>
      <button className="delete"
      onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id},localStorage.removeItem('UserInput'))}>
         Delete</button>
    </div>
    </div>
  );
 }
}
export default connect () (Post);