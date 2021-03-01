import { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

class Listing extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: true,
            offset: 0,
            data: [],
            perPage: 10,
            currentPage: 0
        }
    }

    componentDidMount () {
        this.getData();
    }

    getData () {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)

            this.setState ({
                isLoading: false,
                data: slice
            });
        });
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
  
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getData()
        });
  
    };

    render () {
        let { isLoading, data } = this.state;

        if (isLoading) {
            return (
                <div className="App textAlignCenter">Loading .....</div>
            );
        }

        return (
            <div className="App textAlignCenter">
                <div className="heading">
                    <span>Listing</span>
                    <Link to="/posts/add" className="link">Add</Link>
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
                                data.map(item => (
                                    <tr className="Row" key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>
                                            <Link to={'/posts/view/' + item.id} className="link">View</Link>
                                            <Link to={'/posts/edit/' + item.id} className="link">Edit</Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>        
                    </table>
                </div>
                
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
            </div>
        );
    }        
}

export default Listing;