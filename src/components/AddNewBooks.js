import { useEffect, useState } from "react";
import '../style/addBookPage.css';
import {POST_URL, PUT_URL} from  '../utils/constantFile.js'
import { postFunction,putFunction } from "../utils/helper";
import { useLocation } from "react-router-dom";

const emptyBookInfo = {
    author:"",
    country:"",
    language:"",
    link:"",
    pages:"",
    title:"",
    year:"",
}


const AddNewBooks = ()=>{
    const location = useLocation();

    useEffect(()=>{
        setNewBook(location?.state)
    },[location?.state])

    const [addNewBook,setNewBook] = useState(emptyBookInfo);

    
    function handleInputEvent(event){
        const {name,value} = event.target;
        // console.log(name,value,{...addNewBook, [name]:value})
        setNewBook({...addNewBook, [name]:value})      
    }

    function handleClickEvent(){
        postFunction(POST_URL,addNewBook);
        setNewBook(emptyBookInfo)
    }

    function handleEditEvent(){
        let bookId = location?.state?.id
        putFunction(PUT_URL+bookId, addNewBook)
        setNewBook(emptyBookInfo)
    }


    return (<>
        <div className="inputBox">
            <form>
                <input type="text" value={addNewBook?.author} name="author" placeholder="author" onChange={handleInputEvent} />
                <input type="text" value={addNewBook?.country} name="country" placeholder="country" onChange={handleInputEvent} />
                <input type="text" value={addNewBook?.language} name="language" placeholder="language" onChange={handleInputEvent}/>
                <input type="text" value={addNewBook?.link} name="link" placeholder="link" onChange={handleInputEvent}/>
                <input type="number" value={addNewBook?.pages} name="pages" placeholder="pages" onChange={handleInputEvent}/>
                <input type="text" value={addNewBook?.title} name="title" placeholder="title" onChange={handleInputEvent}/>
                <input type="number" value={addNewBook?.year} name="year" placeholder="year" onChange={handleInputEvent}/>                
                {
                    (location.state==null)?
                    <button className="form-btn" onClick={(event)=>{event.preventDefault();handleClickEvent()}}>Add New BooK</button>
                    :<button className="form-btn" onClick={(event)=>{event.preventDefault();handleEditEvent()}}>Edit BooK</button>
                }
            </form> 
        </div>    
    </>)
}

export default AddNewBooks;