import "./collections-overview.styles.scss";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";
import { useSelector } from "react-redux";
const CollectionOverview = () => {
  const selectCollection = useSelector(selectCollectionForPreview);
  return (
    <div className="collections-overview">
      {selectCollection.map((x) => (
        <CollectionPreview key={x.id} {...x} />
      ))}
    </div>
  );
};

export default CollectionOverview;
