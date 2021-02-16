import { Component } from 'react';
import { Link } from 'react-router-dom';
class Edit extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            item: []
        }
    }

    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(res => res.json())
            .then(json => {
                this.setState ({
                    isLoading: false,
                    item: json
                });
            });
    }

    onSubmit = () => {
        console.log(this.state.request_data)   // you should be able to see your form data
    }

    render () {
        let { isLoading, item } = this.state;

        if (isLoading) {
            return (
                <div className="App textAlignCenter">Loading .....</div>
            );
        }

        return (
            <div className="textAlignCenter">
                <div className="marginTopBottom50">
                    <span>Edit Post</span>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <input type="text" value={item.title} />
                    </div>
                    <div>
                        <textarea>{item.body}</textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>                
            </div>
        );
    }        
}

export default Edit;