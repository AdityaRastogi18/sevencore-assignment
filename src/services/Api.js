import axios from "axios";

const Api = {
  fetchTopHeadlines: async (page, pageLimit) => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "top-headlines", {
      params: {
        country: "in",
        page,
        pageSize: pageLimit
      },
      headers: {
        "X-Api-Key": import.meta.env.VITE_API_KEY,
      },
    });
    return res.data;
  },

  fetchEverything: async (page) => {
    const res = await axios.get(import.meta.env.VITE_API_URL + "top-headlines", {
      params: {
        q: "+web",
        page,
      },
      headers: {
        "X-Api-Key": import.meta.env.VITE_API_KEY,
      },
    });
    return res.data;
  },
};

export default Api;