import { Link } from "react-router-dom";

// import BorderColorIcon from '@mui/icons-material/BorderColor';
const sideBar = ()=>{
    return(
        <div className="sideBar">
        <ul>
            <Link to={"/"} ><div> <i className="bi bi-house-door-fill"></i> Home</div></Link>
            <Link to={"/addNewBooks"}><div> <i className="bi bi-bookmark-plus"></i> Add Books</div></Link>
            <Link to={"/tabularPage"}><div> <i className="bi bi-table"></i> Tabular</div></Link>
            <div> <i className="bi bi-bag"></i> Shopping</div>
            <div> <i className="bi bi-clipboard-check"></i> Orders </div>
            <div>  <i className="bi bi-book-half"></i> Biography </div>
            <div> <i className="bi bi-award-fill"></i> Popular </div>
            {/* <Link to={"/bookStore} ></Link> */}
            {/* <div><BorderColorIcon/></div> */}
        
        </ul>

        <ul>
            <div> <i className="bi bi-house-door-fill"></i> Home</div>
            <div> <i className="bi bi-bag"></i> Shopping</div>
            <div> <i className="bi bi-clipboard-check"></i> Orders </div>
            <div>  <i className="bi bi-book-half"></i> Biography </div>
            <div> <i className="bi bi-award-fill"></i> Popular </div>
            <div> <i className="bi bi-bookmark-plus"></i> Add Books</div>
        </ul>

        <ul>
            <div> <i className="bi bi-house-door-fill"></i> Home</div>
            <div> <i className="bi bi-bag"></i> Shopping</div>
            <div> <i className="bi bi-clipboard-check"></i> Orders </div>
            <div>  <i className="bi bi-book-half"></i> Biography </div>
            <div> <i className="bi bi-award-fill"></i> Popular </div>
            <div> <i className="bi bi-bookmark-plus"></i> Add Books</div>
        </ul>

       
    </div>
    );
}


export default sideBar;