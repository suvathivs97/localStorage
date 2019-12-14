import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';


export class AllPost extends Component {
    state={
        data:[],
        show:false
    }
    componentDidMount=async()=>{
        console.log('kjshfjsh')
        let obj=JSON.parse(localStorage.getItem('UserInput'))
        console.log(obj,'obj')
        if(obj !== undefined && obj!== null){ 
        console.log('res f localsto',obj)
 
        await this.setState({data:obj})
        console.log('sdfdsf',this.state.data)
         }
        
    }
    editable=async(data)=>{
        console.log('edit in all',data)
        await this.setState({show:data})
    }
    render() {

        return (
            <div>
                <h1 className="post_heading">All  Post</h1>
                {
               !this.state.data?<div></div>:
                this.state.data.map((post) => 
                (
                    <div>
                        {this.state.show?
                        <EditComponent post={post} key={post.id} editable={this.editable} /> :
                        <Post key={post.id} post={post} editable={this.editable} />} 
                        </div>
                        ))
                        }
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
