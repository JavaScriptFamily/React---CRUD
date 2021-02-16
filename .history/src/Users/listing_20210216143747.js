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
        let { isLoading, items } = this.state;

        if (isLoading) {
            return (
                <div className="App textAlignCenter">Loading .....</div>
            );
        }

        return (
            <div className="App textAlignCenter">
                <div className="heading">
                    <span>Listing</span>
                    <Link to="/users/add" className="link">Add User</Link>
                </div>
                <div className="table">
                    <ul>
                    {
                        items.map(item => (
                            <div className="Row" key={item.id}>
                                <li>{item.title}</li>
                            </div>
                        ))
                    }
                    </ul>
                </div>
            </div>
        );
    }
        
}

export default Listing;