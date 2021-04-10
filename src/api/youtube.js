import axios from 'axios'

const KEY = "AIzaSyAXCvHY12CxJrbShNA6GFtQB33GVevVRuk";


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 9,
        key: KEY
    }
});
