import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/crown.png';
import CustomButton from '../CustomButton';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Ignd0FZoPsuQr1jLEozUn3bC4mySlCegUXTeiGSU8YJ2CdzDTe3RnX4Xn4GrGBJ91dnP3ljL5QNdV08teB9nHRf0057i2n9Jq';

  const onToken = () => {
    // eslint-disable-next-line no-undef,no-alert
    alert('Payment Sucessful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <CustomButton>Pay Now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
