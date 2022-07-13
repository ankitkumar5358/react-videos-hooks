import axios from "axios";

const KEY = 'AIzaSyDP6yjmRYGbkx4fidABYylUCnp9VcHArHk';


export default axios.create({
      baseURL : 'https://www.googleapis.com/youtube/v3',
      params : {
            part : 'snippet',
            maxResults : 5,
            key : KEY
      }
});

