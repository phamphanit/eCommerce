import "./menu-item.component.styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = (props) => {
  const { title, imageUrl, linkUrl, history } = props;
  return (
    <div
      className="menu-item"
      onClick={() => {
        history.push(linkUrl);
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
export default withRouter(MenuItem);
