import axios from "axios";

export const getdata = (offset, from, to,d) => async dispatch => {
    dispatch({ type: 'LOAD', payload: [] })
    console.log('getData', offset, from, to,d);

    try {
        const axios = require('axios');
        let config = {
            method: 'get',
            url: `https://newsapi.org/v2/everything?from=${from}&to=${to}&q=a&apiKey=f1276e168fe746739d37ad71de47cbe5&page=${offset}&pageSize=5`,
        
        };
        const { data } = await axios(config)
        console.log(JSON.stringify(data.articles));
         dispatch({type:'SUCSEES',payload:data.articles,page:offset,d:d})
    } catch (error) {
        console.log(error)
        dispatch({ type: 'ERROR', payload: error })
    }


}