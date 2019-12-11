import axios from 'axios'

const URL = 'https://pokeapi.co/'
// const URL = 'http://localhost:3000'

const serverCall = (config) => {
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: 'net work error',
          status: 500
        }
      }
      if(error.response.status===401){
        throw error
      }
      return Promise.reject(error);
    });
  config.baseURL = URL
  return axios(config)
}
export default serverCall
