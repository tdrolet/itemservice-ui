import React from 'react';

const itemDetail = (props) => (
    <article>
        <h1> ------------- Selected Item --------------------</h1>
        <h2>{props.id}</h2>
    </article>
);

export default itemDetail;