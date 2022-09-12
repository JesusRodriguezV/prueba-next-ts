import React from 'react';
import { Card as CardBootstrap } from 'react-bootstrap';
import Card from '../types/card.d'

const CustomCard : React.FunctionComponent<Card> = (props: Card) => {
    return (
        <CardBootstrap className='card'>
            <CardBootstrap.Img variant='top' src={ props.img }></CardBootstrap.Img>
            <CardBootstrap.Body>
                <CardBootstrap.Title>{ props.title || 'sin titulo' }</CardBootstrap.Title>
                <CardBootstrap.Text>{ props.body }</CardBootstrap.Text>
            </CardBootstrap.Body>
            <style jsx>
                {`
                    .card {
                        width: '18rem';
                        min-height: 300px;
                    }
                `}
            </style>
        </CardBootstrap>
    )
}

export default CustomCard