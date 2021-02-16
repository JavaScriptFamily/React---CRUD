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

    render () {
        let { isLoading, item } = this.state;

        if (isLoading) {
            return (
                <div className="App textAlignCenter">Loading .....</div>
            );
        }

        return (
            <div>
                <div className="textAlignCenter marginTopBottom50">
                    <span>Edit Post</span>
                </div>
                <form>
                    Title: <input type="text" value={item.title} />
                </form>                
            </div>
        );
    }        
}

export default Edit;