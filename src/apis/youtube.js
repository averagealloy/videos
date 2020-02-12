import axios from 'axios';

const KEY = 'AIzaSyDlPycEEVh-LpN8smuDbuYXeuPi-Vvvii4';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: "snippet", 
      maxResults: 5,
      type: 'video',
      key: KEY
  }
})