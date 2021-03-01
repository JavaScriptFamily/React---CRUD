import {Component} from 'react';
import axios from 'axios';

class Add extends Component {
    state = {
        title: '',
        content: ''
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            userId: 1
        };

        axios.post('/posts', data)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        )
    }
}

export default Add;