import axios from 'axios'

const CLIENT_ID = 'ggX0UomnLs0VmW7qZnCzw';

const query = async () => {
  try {
    const res = await axios.get(`/tracks?client_id=${CLIENT_ID}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
};
