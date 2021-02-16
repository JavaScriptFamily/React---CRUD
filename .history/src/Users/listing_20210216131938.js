import { Component } from 'react';
import { Link } from 'react-router-dom';

class Listing extends Component {
    constructor (props) {
        super(props);
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