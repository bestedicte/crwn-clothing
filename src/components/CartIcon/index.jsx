import connect from 'react-redux/lib/connect/connect';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './style.scss';
import { toggleCartHidden } from '../../redux/Cart/cartActions';

const CartIcon = ( { toggleCartHidden } ) => (
	// eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
	<div className="cart-icon" onClick={ toggleCartHidden }>
		<ShoppingIcon className="shopping-icon" />
		<span className="item-count">0</span>
	</div>
);

const mapDispatchToProps = ( dispatch ) => ( {
	toggleCartHidden: () => dispatch( toggleCartHidden() ),
} );

export default connect(
	null,
	mapDispatchToProps,
)( CartIcon );
