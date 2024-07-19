import api from "./apiInstance";

export const authApi = {
    LOGIN: () => api.get('https://jsonplaceholder.typicode.com/users')
};