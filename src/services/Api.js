import axios from "axios";

const proxyUrl = "https://cors-anywhere.herokuapp.com/"

const Api = {
 
  /* 
    Using the direct values instead of import.meta.env.VITE_API_URL & import.meta.env.VITE_API_KEY because jest is unable to support the env values for testing for some reason
  */

  fetchTopHeadlines: async (page, pageLimit) => {
    const res = await axios.get( "https://newsapi.org/v2/top-headlines", {
      params: {
        country: "in",
        page,
        pageSize: pageLimit
      },
      headers: {
        "X-Api-Key": "867e258842f04997baddbea23980163f",
      },
    });
    return res.data;
  },

  // fetchEverything: async (page) => {
  //   const res = await axios.get(import.meta.env.VITE_API_URL + "top-headlines", {
  //     params: {
  //       q: "+web",
  //       page,
  //     },
  //     headers: {
  //       "X-Api-Key": import.meta.env.VITE_API_KEY,
  //     },
  //   });
  //   return res.data;
  // },
};

export default Api;