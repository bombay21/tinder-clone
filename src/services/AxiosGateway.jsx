import axios from 'axios'

const AxiosGateway = axios.create({
  baseURL: "https://tinder-backend-tijman.herokuapp.com",
});

export default AxiosGateway
