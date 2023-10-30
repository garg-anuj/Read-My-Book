import SideBar from "./SideBar.js";
import { useSelector } from "react-redux";


const Body = ({children})=>{

    const hamBurger = useSelector((state)=>state.hamBurger);
    // console.log(hamBurger.toggleHam)
    return (
    <div className="body">
        {hamBurger.toggleHam?<SideBar/>:null}
        
        {/* <Outlet/> */}
        {/* SearchPage   */}
        {children}
        {/* <AddNewBooks/> */}

    </div>)
}

export default Body;