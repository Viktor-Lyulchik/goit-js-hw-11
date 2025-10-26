'use strict';

import axios from 'axios';

const PIXABAY_API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios.get('', {
    params: {
      key: PIXABAY_API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 60,
    },
  });
}
