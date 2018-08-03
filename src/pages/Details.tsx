import * as React from 'react';
import { BookDetail } from '../components/BookDetail';
import { Header } from '../components/Header';

class Details extends React.Component {
    public render() {
        return (
            <div>
                <Header/>
                <BookDetail/>
            </div>
        );
    }
}

export default Details;
