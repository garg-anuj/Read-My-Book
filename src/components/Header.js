import { useDispatch } from "react-redux";
import { hamBurgerBtn } from "../utils/HamburgerSlice";
import useSearchSuggestions from "../customHooks/useSearchSuggestions.js";
import { useState, } from "react";
import { Link,useNavigate} from "react-router-dom";


const Header = ()=>{
    const [searchedData, setInputText,inputText] = useSearchSuggestions();
    const [isSuggestionVisible,setSuggestionVisible] = useState(false);
    const dispatch = useDispatch();
    const navigate =  useNavigate(); 
    // console.log(isSuggestionVisible, searchedData)

    function handleEvent(){
        dispatch(hamBurgerBtn());
    }
    
    // console.log(searchedData)

    
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
                <input placeholder="Search" 
                    value={inputText}
                    onChange={(event)=>{setInputText(event.target.value)}}
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
                <li><Link to={"/favourites"}><i className="bi bi-suit-heart-fill"></i></Link></li>
                <li><i className="bi bi-cart"></i></li>
                <li><i className="bi bi-person-circle"></i></li>
            </ul>

        </header>
    ); 
}




export default Header;