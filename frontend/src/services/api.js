import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const getAllClothing = () => {
  return axios.get(API_URL);
};

export const getClothingById = (id) => {
  return axios.get(`${API_URL}/${id}`);
};

export const createClothing = (clothing) => {
  return axios.post(API_URL, clothing);
};

export const updateClothing = (id, clothing) => {
  return axios.put(`${API_URL}/${id}`, clothing);
};

export const deleteClothing = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
