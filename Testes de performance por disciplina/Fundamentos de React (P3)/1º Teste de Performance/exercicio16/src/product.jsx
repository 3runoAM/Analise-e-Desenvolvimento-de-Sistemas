import React from 'react';

const product = (props) => {
    return (
        <>
            <h2>{props.name}</h2>
            <p>R$ {props.price.toFixed(2)}</p>
            <p>{props.description}</p>
            <p>Disponível: {props.stock} unidades</p>
            <p>Avaliação: {props.rating} ★</p>
        </>
    );
}


export default product;