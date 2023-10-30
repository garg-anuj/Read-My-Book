import { useDispatch } from "react-redux";
import { hamBurgerBtn } from "../Redux/HamburgerSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useSearchSuggestions from "../customHooks/useSearchSuggestions.js";
import { useState, } from "react";
import { Link,
    // useNavigate
} from "react-router-dom";
import { setSearchedValue } from "../Redux/handleSearchEventSlice ";


const Header = ()=>{
    const [searchedData, setInputText,inputText] = useSearchSuggestions();
    const [isSuggestionVisible,setSuggestionVisible] = useState(false);
    const dispatch = useDispatch();
    // const navigate =  useNavigate(); 
    // console.log(isSuggestionVisible, searchedData)
    const  cartCount= useSelector((state)=>state?.cartItems?.cartList?.length);

    function handleEvent(){
        dispatch(hamBurgerBtn());
    }


    return (
        <header className="header">
    
            <ul className="">
                <li><i className="bi bi-list" onClick={handleEvent}></i></li>
                <Link to="/"><li><i className="bi bi-book-half"/>ReadMyBook</li></Link>            
            </ul>


            {/* <Search/> */}
            <ul className=""
                onMouseOver={()=>setSuggestionVisible(true)}
                onMouseLeave={()=>setSuggestionVisible(false)} 
                // onBlur={()=>setSuggestionVisible(false)}
            >
                <input placeholder="Live Search Suggestion" 
                    value={inputText}
                    onChange={(event)=>{
                        dispatch(setSearchedValue(event.target.value));
                        setInputText(event.target.value);
                        
                     }
                    }
                    onFocus={()=>setSuggestionVisible(true)}   
                />

                <div>
                    <i className="bi bi-search"></i>
                </div>

                <ul 
                    className={isSuggestionVisible?"suggestionBox":"suggestionBox suggestionBox_DeActive"}>
                    {
                        searchedData?.map((sugg,i)=>
                        <h1  
                            onClick={()=>{
                                setInputText(sugg.title);
                                // navigate("/searchResult?v="+sugg)
                            }}  
                            key={sugg.id}
                        >
                            {sugg.title}
                        </h1>)
                    }
                
                    {/* <Link to={"/searchResult?v="+sugg} key={`suggestion${i}`}> <h1  onClick={()=>setInputText(sugg)}>{sugg}</h1></Link>)} */}
                </ul>
            </ul> 


            <ul className="">
                <li><Link to={"/AddtoCart"}><span>{cartCount}</span><i className="bi bi-cart"></i></Link></li>
                {/* <li><i className="bi bi-suit-heart-fill"></i></li> */}
                {/* <li><i className="bi bi-person-circle"></i></li> */}
            </ul>

        </header>
    ); 
}




export default Header;