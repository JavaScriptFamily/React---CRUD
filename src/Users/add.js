import {Component} from 'react';
import { Link } from 'react-router-dom';

class Add extends Component {
    
    render () {
        return (
            <div className="textAlignCenter">
                <div className="heading">
                    <span>Add user</span>
                    <Link to="/users" className="link">Users</Link>
                </div>
            </div>
        )
    }
}

export default Add;