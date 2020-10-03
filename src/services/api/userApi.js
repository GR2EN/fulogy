import axios from 'axios';

const UserApi = {
  async saveUser({ fullName, email, phoneNumber }) {
    const userData = { fullName, email, phoneNumber };
    const token = Math.random(0).toString(36).substr(2);
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': token,
    };
    return axios.post('/api/user', userData, { headers }).then(({ data }) => data);
  },
};

export default UserApi;
