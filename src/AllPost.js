import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';


export class AllPost extends Component {
    // state={
    //     data:[]
    // }
    // componentDidMount=async()=>{
    //     console.log('kjshfjsh')
    //     let obj=[JSON.parse(localStorage.getItem('mydata'))]
    //     console.log('res f localsto',obj)

    //     await this.setState({data:obj})
    //     console.log('sdfdsf',this.state.data)
    // }
    render() {
        // console.log('render',this.state.data)

        return (
            <div>
                <h1 className="post_heading">All  Post</h1>
                {this.props.posts.map((post) => 
                (
                    <div key={post.id}>
                        {post.editing ? 
                        <EditComponent post={post} key={post.id} /> :
                        <Post key={post.id} post={post} />} 
                        </div>
                        ))}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        posts:state
    }
}

export default connect(mapStateToProps) (AllPost)
