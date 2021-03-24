import { createSelector } from 'reselect';

export const shopSelector = state => state.shop;

export const selectCollections = createSelector(
        [shopSelector],
        shop => shop.collections
)
export const selectCollectionForPreview = createSelector(
        [selectCollections],
        collections => collections ? Object.keys(collections).map(key => collections[key]) : []
)
export const selectSpecificCollection = collectionParam => createSelector(
        [selectCollections],
        collections => collections ? collections[collectionParam] : {}
)