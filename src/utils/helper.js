import axios from "axios";



export async function axiosFetchFunction(API_URL,cb){
    try{
        const apiDataResponse = await axios.get(API_URL);
        const apiData =apiDataResponse.data;
            return cb(apiData);
        
     }catch(error){
        console.error("Error Fetching YoutubeData",error);
     }
    
}

export  async function postFunction(POST_URL,payloadData){
    try{  
        const apiDataResponse = await axios.post(POST_URL,payloadData);
        const apiData = apiDataResponse.data;
        console.log("added",apiData);
        return apiData;
    }catch(error){
        console.log('Error in PostApiResponse',error);
    }

}


export async function putFunction(PUT_URL,putData){
    try{
        const response= await axios.put(PUT_URL, putData);
        const apiData = response.data;
        return apiData
    }catch(error){
        console.log(error)
    }
}