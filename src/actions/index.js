import axios from 'axios';
const URL = 'http://localhost:3004';

export function artistList(keyword){

    const request = axios.get(`${URL}/artists?q=${keyword}`).then(response=> response.data );
    
    return{
        type:'Get_Artists',
        payload: request
    }
}

export function artistListAll(){

    const request = axios.get(`${URL}/artists?_limit=6`).then(response=> response.data );
    
    return{
        type:'Get_Artists_All',
        payload: request
    }
}