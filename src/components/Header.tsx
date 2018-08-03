import * as React from 'react';
import {Jumbotron,} from 'react-bootstrap';
import '../index.css';

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Jumbotron className={"jumbotron"}>
            <h2>Nuevo Code Case</h2>
            <p>
                Egemen Kayalıdere
            </p>
        </Jumbotron>
    );
};