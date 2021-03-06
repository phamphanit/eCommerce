import "./directory.component.styles.scss";
import { useState, useEffect } from "react";
import { DIRECTORY_INITIAL_STATE } from "../../redux/directory/directory.reducer";
import MenuItem from "../menu-item/menu-item.component";
const Directory = () => {
  const [directState, setDirectState] = useState(DIRECTORY_INITIAL_STATE);

  useEffect(() => {
    setDirectState(DIRECTORY_INITIAL_STATE);
  }, []);

  return (
    <div className="directory-menu">
      {directState.sections.map((item) => (
        <MenuItem key={item.id} {...item} />
      ))}
    </div>
  );
};
export default Directory;
