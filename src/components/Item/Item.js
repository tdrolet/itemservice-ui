import React from 'react';

import './Item.css';

const item = (props) => (
    <article className="Item" onClick={props.clicked}>
        <h1>{props.itemName}</h1>
        <div>
            <div>{props.description}</div>
        </div>
    </article>
);

export default item;