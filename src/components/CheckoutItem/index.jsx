import { connect } from 'react-redux';
import './style.scss';
import { addItem, clearItemFromCaart, removeItem } from '../../redux/Cart/cartActions';

const CheckoutItem = ( {
	cartItem, clearItem, addItem, removeItem,
} ) => {
	const {
		name, imageUrl, price, quantity,
	} = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={ imageUrl } alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
				<div className="arrow" onClick={ () => removeItem( cartItem ) }>&#10094;</div>
				<span className="value">{quantity}</span>
				{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
				<div className="arrow" onClick={ () => addItem( cartItem ) }>&#10095;</div>
			</span>
			<span className="price">{price}</span>
			{/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
			<div className="remove-button" tabIndex={ 0 } role="button" onClick={ () => clearItem( cartItem ) }>&#10005;</div>
		</div>
	);
};

const mapDispatchToProps = ( dispatch ) => ( {
	clearItem: ( item ) => dispatch( clearItemFromCaart( item ) ),
	addItem: ( item ) => dispatch( addItem( item ) ),
	removeItem: ( item ) => dispatch( removeItem( item ) ),
} );

export default connect( null, mapDispatchToProps )( CheckoutItem );
