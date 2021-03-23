import ShopActionTypes from './shop.types';
const INITIAL_STATE = {
        collections: null,
        isLoading: false,
        errorMessage: null
}
const shopReducer = (state, action) => {
        switch (action.type) {
                case ShopActionTypes.COLLECTION_FETCH_START:

                        return {
                                ...state,
                                isLoading: true
                        };
                case ShopActionTypes.COLLECTION_FETCH_SUCCESS:
                        return {
                                ...state,
                                collections: action.payload
                        }

                default:
                        break;
        }
}
export default shopReducer;