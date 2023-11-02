import { useSelector } from "react-redux";

import SideBar from "./SideBar.js";

const Body = ({ children }) => {
  const hamBurger = useSelector((state) => state.hamBurger);

  return (
    <div className="body">
      {hamBurger.hamBurgerState ? <SideBar /> : null}

      {/* <Outlet/> */}
      {/* SearchPage   */}
      {children}
      {/* <AddNewBooks/> */}
    </div>
  );
};

export default Body;
