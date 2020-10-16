import React from 'react';

const item = (props) => (
    <article>
        <h1>{props.name}</h1>
        <div>
            <div>{props.description}</div>
        </div>
    </article>
);

export default item;