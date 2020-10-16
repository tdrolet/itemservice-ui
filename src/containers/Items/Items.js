import React, { Component } from 'react';
import axios from 'axios';

import Item from '../../components/Item/Item';

class Items extends Component {
    state = {
        items: [],
        selectedItemId: null,
        error: false
    }

    componentDidMount () {
        axios.get( 'https://itemservice.tdrolet.com/api/v1/items')
            .then( response => {
                const items = response.data;
                this.setState({items: items});
                console.log( response );
            } )
            .catch(error => {
                // console.log(error);
                this.setState({error: true});
            });
    }

    render () {
        let items = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            items = this.state.items.map(item => {
                return <Item 
                    key={item.id} 
                    name={item.name} 
                    description={item.description}
                 />;
            });
        }

        return (
            <div>
                <section>
                    {items}
                </section>
            </div>
        );
    }
}

export default Items;