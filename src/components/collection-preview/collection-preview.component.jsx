import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.styles.scss";
import { withRouter } from "react-router-dom";
const CollectionPreview = (props) => {
  const { routeName, title, items, history, match } = props;

  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => {
          history.push(`${match.path}/${routeName}`);
        }}
      >
        {title}
      </h1>
      <div className="preview">
        {items
          .filter((x, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} {...item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
