import "./collection-item.component.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
const CollectionItem = (props) => {
  const { imageUrl, name, price } = props;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton></CustomButton>
    </div>
  );
};
export default CollectionItem;
