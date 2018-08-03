import axios from "axios";
import * as React from 'react';
import {Button, Col, Row, Table} from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../index.css';
import {IBook} from "../models/book";

interface IState {
    books: IBook[];
    loading: any;
    searchedText: any;
    filteredBook: any
}

interface IProps {
    onChange?: void;
}

export class BooksList extends React.Component<IProps, IState> {
    constructor(props: any) {
        super(props);
        this.state = {books: [], loading: 1, searchedText: '', filteredBook: ''};

        this.handleSearch = this.handleSearch.bind(this);
    }

    public componentDidMount() {
        axios.get('https://5b61f06807412d00142acf0f.mockapi.io/api/book')
            .then((res) => {
                this.setState({
                    books: res.data,
                    loading: 0
                });
            });
    }

    public handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        const allBooks = this.state.books;

        const filteredBook = allBooks.find((book) => {
            return (
                book.bookName.toLowerCase() === e.target.value.toLowerCase() ||
                book.bookWriter.toLowerCase() === e.target.value.toLowerCase() ||
                book.bookPublisher.toLowerCase() === e.target.value.toLowerCase()
            );
        });

        if (filteredBook !== undefined) {
            this.setState({filteredBook})
        } else {
            this.setState({filteredBook: ''})
        }
    };

    public handleCreate(event: any): void {
        axios.post('https://5b61f06807412d00142acf0f.mockapi.io/api/book')
            .then((res) => {
                axios.get('https://5b61f06807412d00142acf0f.mockapi.io/api/book')
                    .then((res2) => {
                        this.setState({
                            books: res2.data
                        });
                    });
            });
    }

    public render() {

        if (this.state.loading === 0) {

            if (this.state.filteredBook === '') {
                return (
                    <Row className="show-grid">
                        <Col md={12}>
                            <div className="content">
                                <div className={"searchBar"}>
                                    <input placeholder={"Type Full Book Name or Writer or Publisher to Search"}
                                           className={"searchBox"} type="text" onChange={this.handleSearch}/>
                                    <div>{this.state.searchedText}</div>
                                </div>
                                <Table striped={true} bordered={true} condensed={true} hover={true}>
                                    <thead>
                                    <Header/>
                                    </thead>
                                    <tbody>
                                    {this.state.books.map((book: IBook) => {
                                        return (
                                            <tr key={book.id}>
                                                <td>
                                                    <span>{book.id}</span>
                                                </td>
                                                <td>
                                                    <span>{book.bookName}</span>
                                                </td>
                                                <td>
                                                    <span>{book.bookWriter}</span>
                                                </td>
                                                <td>
                                                    <span>{book.bookPublisher}</span>
                                                </td>
                                                <td>
                                                    <Link key={book.id} to={"/detail/" + book.id}><Button bsStyle="primary">Details</Button></Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </Table>
                                <Button bsStyle="primary" onClick={this.handleCreate.bind(this, event)}>Create New
                                    Data</Button>
                            </div>
                        </Col>
                    </Row>
                );
            } else {
                return (
                    <Row className="show-grid">
                        <Col md={12}>
                            <div className="content">
                                <div className={"searchBar"}>
                                    <input placeholder={"Type Full Book Name or Writer or Publisher to Search"} className={"searchBox"} type="text" onChange={this.handleSearch}/>
                                    <div>{this.state.searchedText}</div>
                                </div>
                                <Table striped={true} bordered={true} condensed={true} hover={true}>
                                    <thead>
                                    <Header/>
                                    </thead>
                                    <tbody>
                                    {[this.state.filteredBook].map((book: IBook) => {
                                        return (
                                            <tr key={book.id}>
                                                <td>
                                                    <span>{book.id}</span>
                                                </td>
                                                <td>
                                                    <span>{book.bookName}</span>
                                                </td>
                                                <td>
                                                    <span>{book.bookWriter}</span>
                                                </td>
                                                <td>
                                                    <span>{book.bookPublisher}</span>
                                                </td>
                                                <td>
                                                    <Link key={book.id} to={"/detail/" + book.id}><Button bsStyle="primary">Details</Button></Link>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </Table>
                                <Button bsStyle="primary" onClick={this.handleCreate.bind(this, event)}>Create New
                                    Data</Button>
                            </div>
                        </Col>
                    </Row>
                );
            }

        } else {
            return (<div className={"loader"}>Loading...</div>);
        }
    }
}

const Header = () => {
    return (
        <tr>
            <th>Id</th>
            <th>Book Name</th>
            <th>Book Writer</th>
            <th>Book Publisher</th>
            <th>Actions</th>
        </tr>
    );
};