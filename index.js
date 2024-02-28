require('dotenv').config();
const axios = require('axios');

async function shortenLink(link){
    try {
        const response = await axios.post('https://api-ssl.bitly.com/v4/shorten',{
            "long_url":link
        },{headers:{
            'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` 
        }})
        return response.data;
    }catch(error){
        console.error('error', error);
    }
}

(async()=>{
    const url = await shortenLink('https://www.youtube.com/@sachinrajbhardseudwarka8246');
    console.log(url);
})();
