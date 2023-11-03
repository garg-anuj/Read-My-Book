import { useSelector } from "react-redux";

import SideBar from "./SideBar.js";

const Body = ({ children }) => {
  const hamBurger = useSelector((state) => state?.hamBurger?.hamBurgerState);

  return (
    <div className="body">
      {hamBurger ? <SideBar /> : null}
      {children}
    </div>
  );
};

export default Body;
