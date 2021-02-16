import { Component } from 'react';
import { Link } from 'react-router-dom';

class Listing extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            items: []
        }
    }

    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(json => {
                this.setState ({
                    isLoading: false,
                    items: json
                });
            });
    }

    render () {
        return (
            <div className="App textAlignCenter">
                <div className="heading">
                    <span>Listing</span>
                    <Link to="/users/add" className="link">Add User</Link>
                </div>
            </div>
        );
    }
        
}

export default Listing;