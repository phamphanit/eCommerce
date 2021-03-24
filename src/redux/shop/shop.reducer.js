import ShopActionTypes from './shop.types';
const INITIAL_STATE = {
        collections: null,
        isLoading: false,
        errorMessage: null
};
const shopReducer = (state = INITIAL_STATE, action) => {
        switch (action.type) {
                case ShopActionTypes.COLLECTION_FETCH_START:

                        return {
                                ...state,
                                isLoading: true
                        };
                case ShopActionTypes.COLLECTION_FETCH_SUCCESS:
                        return {
                                ...state,
                                isLoading: false,
                                collections: action.payload
                        };
                case ShopActionTypes.COLLECTION_FETCH_FAILURE:
                        return {
                                ...state,
                                isLoading: false,
                                errorMessage: action.payload
                        }
                default:
                        return state;
        }
}
export default shopReducer;