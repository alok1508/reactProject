import axios from 'axios';

const KEY ='AIzaSyBO06sd9GrEIVA4yN1OfG7Db4GR1AjHH9w';

export default  axios.create({
        baseURL :'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResults:5,
            key:KEY,
        }
});