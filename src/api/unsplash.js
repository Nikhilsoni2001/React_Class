import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Hx6oS1On6tUt98t1dogn9Rx9sZ-t_Fknu5S17szr9hY',
  },
});
