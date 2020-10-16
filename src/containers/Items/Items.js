import React, { Component } from 'react';
import axios from 'axios';

import Item from '../../components/Item/Item';
import ItemDetail from '../../components/ItemDetail/ItemDetail';

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

    itemSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let items = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            items = this.state.items.map(item => {
                return <Item 
                    key={item.id} 
                    itemName={item.itemName} 
                    description={item.description}
                    clicked={() => this.itemSelectedHandler(item.id)}
                 />;
            });
        }

        let itemDetail = null;
        if (!this.state.selectedItemId) {
            itemDetail = 
                <section>
                    <ItemDetail id={this.state.selectedPostId} />
                </section>
            
        }

        return (
            <div>
                <section>
                    {items}
                </section>
                <section>
                    {itemDetail}
                </section>
            </div>
        );
    }
}

export default Items;