import { createSelector } from "reselect";
const selectShop = state => state.shop;

// mapping the collection to our id since they are numbers in the collections data right now.
// will change the ids in the collections data to be hats, sneakers, etc. in the future
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5
};

export const selectCollections = createSelector(
  selectShop,
  shop => shop.collections
);

// getting collectionUrlParam will be the /:collectionId
export const selectCollection = collectionUrlParam =>
  createSelector(
    selectCollections,
    collections =>
      collections.find(
        collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
      )
  );
