import axios from 'axios';

const KEY = 'AIzaSyAJW0H0fXoW1_3Nt8oyVIdhaaDy2xiMjYU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  }
});

