import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = (state) => state.shop;

// eslint-disable-next-line import/prefer-default-export
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections,
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]),
);

export const selectCollection = memoize((collectionUrlParam) => createSelector(
  [selectCollections],
  (collections) => collections[collectionUrlParam],
));
