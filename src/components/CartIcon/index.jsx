import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/Cart/cartActions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './style.scss';
import { selectCartItemsCount } from '../../redux/Cart/cartSelectors';

const CartIcon = ( { toggleCartHidden, itemCount } ) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
	<div className="cart-icon" onClick={ toggleCartHidden }>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">{itemCount}</span>
	</div>
);

const mapDispatchToProps = ( dispatch ) => ( {
	toggleCartHidden: () => dispatch( toggleCartHidden() ),
} );

const mapStateToProps = ( state ) => ( {
	itemCount: selectCartItemsCount( state ),
} );

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)( CartIcon );
