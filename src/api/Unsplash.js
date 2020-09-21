import axios from 'axios';

export default axios.create({
        baseURL:'https://api.unsplash.com',
        headers:{
            Authorization: 'Client-ID bgGzIsul6iIB7H2vz98GKhU7_WuAtjG-OYKFaKusLoc'
        }
});