import axios from "axios";
import { ref } from "vue";

const fetchingData = (url) => {
  const data = ref();
  const error = ref(null);
  const load = () => {
    axios
      .get(url)
      .then((res) => {
        data.value = res.data;
      })
      .catch((e) => {
        error.value = e;
      });
  };

  return { data, error, load };
};

export default fetchingData;
