import axios from 'axios';

export const getSecretWord = async (callback)=>{
    const response = await axios.get('http://localhost:3030');
    callback(response.data);
}