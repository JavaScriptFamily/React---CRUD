import { Component } from 'react';
import { Link } from 'react-router-dom';
class View extends Component {
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

    render () {
        let { isLoading, item } = this.state;

        if (isLoading) {
            return (
                <div className="App textAlignCenter">Loading .....</div>
            );
        }

        return (
            <div>
                <div className="heading">
                    <span>View Post</span>
                    <Link to="/users" className="link">Post</Link>
                </div>
                <div className="">                  
                    <div>ID: {item.id}</div>
                    <div>Title: {item.title}</div>
                    <div>Body: {item.body}</div>
                </div>
            </div>
        );
    }        
}

export default View;