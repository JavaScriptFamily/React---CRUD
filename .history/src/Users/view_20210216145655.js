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
            <div className="App textAlignCenter">
                <div className="heading">
                    <span>View Post</span>
                    <Link to="/users" className="link">Post</Link>
                </div>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Action</th>
                            </tr>    
                        </thead>  
                        <tbody>
                            {
                                <tr className="Row" key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td><Link to={'/users/view/' + item.id} className="link">View</Link></td>
                                </tr>
                            }
                        </tbody>        
                    </table>
                </div>
            </div>
        );
    }
        
}

export default Listing;