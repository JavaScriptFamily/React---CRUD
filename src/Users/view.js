import {Component} from 'react';
import { Link } from 'react-router-dom';

class View extends Component {
    constructor() {
        super();
    }

    render () {
        return (
            <div className="textAlignCenter">
                <div className="heading">
                    <span>View user</span>
                    <Link to="/users" className="link">Users</Link>
                </div>
            </div>
        )
    }
}

export default View;