import { createSelector } from "reselect";
const selectShop = state => state.shop;

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

// getting collectionUrlParam will be the /:collectionId
export const selectCollection = collectionUrlParam =>
  createSelector(
    selectCollections,
    collections => (collections ? collections[collectionUrlParam] : null)
  );

export const selectCollectionsForPreview = createSelector(
  selectCollections,
  collections =>
    // if collections is null, call object.keys. Else if null return empty array
    collections ? Object.keys(collections).map(key => collections[key]) : []
);
