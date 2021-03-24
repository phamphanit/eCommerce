import ShopActionTypes from './shop.types';

export const fetchCollectionStart = () =>
({
        type: ShopActionTypes.COLLECTION_FETCH_START
})
export const fetchColletionSuccess = (collections) =>
({
        type: ShopActionTypes.COLLECTION_FETCH_SUCCESS,
        payload: collections
})
export const fetchCollectionFailure = (error) => (
        {
                type: ShopActionTypes.COLLECTION_FETCH_FAILURE,
                payload: error
        }
)