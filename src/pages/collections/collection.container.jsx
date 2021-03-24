import CollectionPage from "./collection.component";
import WithSpinner from "./../../components/with-spinner/with-spinner.component";
import { useSelector } from "react-redux";

const CollectionPageContainer = (props) => {
  const isLoading = useSelector((state) => !state.shop.collections);

  return WithSpinner(CollectionPage)({ isLoading, ...props });
};
export default CollectionPageContainer;
