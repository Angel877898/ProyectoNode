import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

const NotFound = () => {
    return (
        <Container className="p-3">
            <Jumbotron>

                <h1 className="text-center">Error 404</h1>
                <p className='text-center'>Parece que estas perdido, Quieres que busque a tu mama?</p>
                <div className='text-center'>
                    <Button variant='secondary'>No gracias, llevame al inicio</Button>
                </div>

            </Jumbotron>
        </Container>
    );

}

export default NotFound;

