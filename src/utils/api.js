import axios from "axios";

const BASE_URL="https://www.googleapis.com/customsearch/v1";

const params ={
    key:'AIzaSyCCxvGUFnGUegKoyeelY31P3dPVNwiic9U',
    cx:'320e68ab8f16649e8'
}



export const fetchDataFromApi = async (payload) => {
    const {data} = await axios.get(BASE_URL, {
    params: {...params, ...payload}
})
return data;


};
