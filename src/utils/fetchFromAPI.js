import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: { 
    maxResults: 50,
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};

//  //this was the originall one copied from the the online resource
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://youtube-v31.p.rapidapi.com/captions',
//   params: {
//     part: 'snippet',
//     videoId: 'M7FIvfx5J10'
//   },
//   headers: {
//     'X-RapidAPI-Key': '39f5fe1f7fmsh537a65b27e28107p1699c9jsnbbe4aa60617f',
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }