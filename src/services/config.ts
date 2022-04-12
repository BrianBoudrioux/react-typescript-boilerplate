import axios from 'axios';
import store from '../store';
import { login } from '../store/user.reducer';

const http = axios.create({
  baseURL: `http://localhost:3050`,
  withCredentials: true
});

http.interceptors.request.use(request => {

  const state = store.getState();
  
  if (request.headers)
    request.headers["Authorization"] = `Bearer ${state.user.user?.access_token}`;

  return request;
});

http.interceptors.response.use(response => {
  return response;
  },
  async (error) => {
    
    // Pass all non 401s back to the caller.
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    try {
      const response = await http.get('/users/auth/refresh');
      
      store.dispatch(login(response.data));
      error.hasRefreshedToken = true;
      
      return Promise.reject(error);

    } catch (error) {
      const tokenError = new Error("Cannot refresh token");
      return Promise.reject(tokenError);
    }
      

  }
);

export default http;