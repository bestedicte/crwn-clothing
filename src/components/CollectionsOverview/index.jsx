import './style.scss';
import { connect } from 'react-redux';
import React from 'react';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

const CollectionsOverview = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
