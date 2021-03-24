import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPageContainer from "../collections/collection.container";
import * as shopActions from "../../redux/shop/shop.actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Route } from "react-router-dom";
const ShopPage = (props) => {
  const { match } = props;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(shopActions.fetchCollectionStart());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverview}
      ></Route>
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      ></Route>
    </div>
  );
};

export default ShopPage;
