import React, { Component } from 'react';
import { connect } from 'react-redux';

var edit=[];
class EditComponent extends Component {
  state={
    edit:[]
  }
handleEdit = (e) => {
  e.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const data = [{
    id:new Date(),
    title:newTitle,
    message: newMessage
  }]
  localStorage.setItem('UserInput', JSON.stringify(data));
  this.props.editable(false)
  window.location.reload()
}
render() {
return (
<div key={'1'} className="post">
  <form  className="form" onSubmit={this.handleEdit}>
    <input required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
    <textarea required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);