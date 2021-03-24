import "./collections.component.styles.scss";
import { useSelector } from "react-redux";
import { selectSpecificCollection } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
const CollectionPage = (props) => {
  const { match } = props;
  const collection = useSelector(
    selectSpecificCollection(match.params.collectionId)
  );
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((x) => (
          <CollectionItem key={x.id} {...x} />
        ))}
      </div>
    </div>
  );
};
export default CollectionPage;
