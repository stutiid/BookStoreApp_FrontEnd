import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
/**
 * @description:- class is used to make api calls using axios to the backend server and return the appropriate response or error
 */
export default class Service {
  /**
   * @description :- function is used to get the filtered list of location based on the filter value and type provided by the user
   * @param {*} url_append :- url to be appended to the base url to call the get api
   * @param {*} value :- query parameter value given by user
   * @returns:- response on completion of promise which will be either success response or failure error
   */
  getLocationByName(url_append, value, type) {
    let params;
    if (type === "search") {
      params = {
        name: value,
      };
    }
    if (type === "suggestions") {
      params = {
        initial: value,
      };
    }
    return axios
      .get(url_append, {
        params: params,
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response.data.message;
      });
  }
}
