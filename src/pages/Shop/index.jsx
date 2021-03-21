import React from 'react';

import SHOP_DATA from './shopData.js';

import CollectionPreview from '../../components/CollectionPreview';

class ShopPage extends React.Component {
	constructor( props ) {
		super( props );

		// eslint-disable-next-line react/state-in-constructor
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map( ( { id, ...otherCollectionProps } ) => (
					<CollectionPreview key={ id } { ...otherCollectionProps } />
				) )}
			</div>
		);
	}
}

export default ShopPage;
