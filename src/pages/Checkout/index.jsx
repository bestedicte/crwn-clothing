import './style.scss';
import mapStateToProps from 'react-redux/lib/connect/mapStateToProps';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cartSelectors';

const CheckoutPage = ( cartItems, total ) => {
	return (
		<div className="checkout-page">
			<div className="checkout-header">
				<div className="header-block">
					<span>
						Product
					</span>
				</div>
				<div className="header-block">
					<span>
						Description
					</span>
				</div>
				<div className="header-block">
					<span>
						Quantity
					</span>
				</div>
				<div className="header-block">
					<span>
						Price
					</span>
				</div>
				<div className="header-block">
					<span>
						Remove
					</span>
				</div>
			</div>
			{
				cartItems.map( ( cartItem ) => cartItem.name )
			}

			<div className="total">
				<span>TOTAL: ${total}</span>
			</div>
		</div>
	);
};

mapStateToProps = createStructuredSelector(
	{
		cartItems: selectCartItems,
		total: selectCartTotal(),
	},
);

export default connect( mapStateToProps )( CheckoutPage );
