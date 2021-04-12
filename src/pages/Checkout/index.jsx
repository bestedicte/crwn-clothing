import './style.scss';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cartSelectors';
import CheckoutItem from '../../components/CheckoutItem';

const CheckoutPage = ( { cartItems, total } ) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{cartItems.map( ( cartItem ) => (
			<CheckoutItem key={ cartItem.id } cartItem={ cartItem } />
		) )}
		<div className="total">TOTAL: ${total}</div>
	</div>
);

const mapStateToProps = createStructuredSelector( {
	cartItems: selectCartItems,
	total: selectCartTotal,
} );

export default connect( mapStateToProps )( CheckoutPage );