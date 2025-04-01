import axios from "axios"
import { getCookie } from "../cookie/getCookie"
axios.defaults.withCredentials = true;


const compraApi = axios.create({
    baseURL: 'http://127.0.0.1:8000/compras/set/compras/'
})

export const getAllPurchases = () => {
    return compraApi.get('/', {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            'X-CSRFToken': getCookie('csrftoken'),
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    })
}

export const postCarrito = async (data) => {
    const accessToken = localStorage.getItem('access_token');
    const csrfToken = getCookie('csrftoken');
    return axios.post('http://127.0.0.1:8000/compras/set/shop/', data , {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'X-CSRFToken': csrfToken,
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    });
};

export const initializeCSRF = async () => {
    try {
      await axios.get('http://127.0.0.1:8000/login/');
      console.log('CSRF cookie establecida');
    } catch (error) {
      console.error('Error al inicializar CSRF:', error);
    }
  };