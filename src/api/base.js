import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3001/api';
export const apiClient = axios;
//# sourceMappingURL=base.js.map