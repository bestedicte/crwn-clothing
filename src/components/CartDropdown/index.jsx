import './style.scss';
import CustomButton from '../CustomButton';

const CartDropdown = () => {
	return (
		<div className="cart-dropdown">
			<div className="cart-item" />
			<CustomButton> GO TO CHECKOUT </CustomButton>
		</div>
	);
};

export default CartDropdown;
