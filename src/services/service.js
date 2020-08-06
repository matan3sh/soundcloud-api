import axios from 'axios';

const CLIENT_ID = 'ggX0UomnLs0VmW7qZnCzw';

const query = async (filter) => {
  let res;
  try {
    if (filter === '') res = await axios.get(`/tracks?client_id=${CLIENT_ID}`);
    else res = await axios.get(`/tracks?client_id=${CLIENT_ID}&q=${filter}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default {
  query,
};
