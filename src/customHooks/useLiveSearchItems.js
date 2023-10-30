import { useEffect} from "react"
import { SEARCH_URL } from "../utils/constantFile"
import { axiosFetchFunction } from "../utils/helper"
import {useSelector } from "react-redux/es/hooks/useSelector";

const useLiveSearchItems = (cb)=>{
    const getSearchedValue = useSelector((state)=>state.handleSearchEvent.getValue);
    // const [count,setCount] = useState(0);

    useEffect(() => {
        if(getSearchedValue !=="")
        axiosFetchFunction(SEARCH_URL + getSearchedValue,(data)=>cb(data));
      }, [getSearchedValue]);
}


export default useLiveSearchItems;