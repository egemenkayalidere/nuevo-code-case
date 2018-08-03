import axios from "axios";
import * as React from 'react'
import {Link} from "react-router-dom";
import '../index.css';
import {IBook} from "../models/book";

interface IState {
    books: IBook[],
    loading: any,
    id: string
}

export class BookDetail extends React.Component<{}, IState> {

    constructor(props: any) {
        super(props);
        this.state = {books: [], loading: 1, id: window.location.pathname.split('/')[2]};
    }

    public componentDidMount() {
        axios.get('https://5b61f06807412d00142acf0f.mockapi.io/api/book/' + this.state.id)
            .then((res) => {
                this.setState({
                    books: [res.data],
                    loading: 0
                });
            });
    }

    public render() {
        return (
            <div className={"content"}>
                {this.state.books.map((book: IBook, key) => {
                    return (
                        <div key={book.id}>
                            <div key={key}>

                                <b>ID: </b><span>{book.id}</span>

                            </div>
                            <div key={key + 1}>

                                <b>Name: </b><span>{book.bookName}</span>

                            </div>
                            <div key={key + 2}>

                                <b>Writer: </b><span>{book.bookWriter}</span>

                            </div>
                            <div key={key + 3}>

                                <b>Publisher: </b><span>{book.bookPublisher}</span>

                            </div>
                            <br/>
                            <Link to={"/"}><div>Go to back</div></Link>
                        </div>
                    );
                })}
            </div>
        );
    }
}