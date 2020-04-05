
import axios from 'axios';

const get = async ({
  path,
  params,
}) => {
  let result
  try {
    result = await axios.get(path, {
      params,
      headers: {
        'Ocp-Apim-Subscription-Key': 'b8cecc6c496b4778aa7e058344ef1952'
      },
    });
  } catch (error) {
    throw error;
  }

  return result;
};

export default {
  get
};