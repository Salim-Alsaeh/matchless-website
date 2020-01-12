import React from 'react';
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'
import './collection-item.component.styles.scss'
import { addItem } from '../../actions/cart'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    console.log(imageUrl)
    return (
        <div className="collection-item">
            <div className="image" style={ { backgroundImage: `url(${imageUrl[0]})` } } />

            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">{ price }</span>
            </div>
            {console.log('item',item)}
            <CustomButton onClick={ () => { addItem(item) } } inverted> ADD To Cart</CustomButton>
        </div>
    )

};

export default connect(null, { addItem })(CollectionItem);
