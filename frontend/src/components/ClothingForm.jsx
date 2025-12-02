import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createClothing, getClothingById, updateClothing } from '../services/api';

const ClothingForm = () => {
  const [clothing, setClothing] = useState({ name: '', description: '', price: 0, imageUrl: '' });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getClothingById(id).then(response => {
        setClothing(response.data);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClothing({ ...clothing, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      updateClothing(id, clothing).then(() => {
        navigate('/');
      });
    } else {
      createClothing(clothing).then(() => {
        navigate('/');
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={clothing.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="description" value={clothing.description} onChange={handleChange} placeholder="Description" required />
      <input type="number" name="price" value={clothing.price} onChange={handleChange} placeholder="Price" required />
      <input type="text" name="imageUrl" value={clothing.imageUrl} onChange={handleChange} placeholder="Image URL" required />
      <button type="submit">{id ? 'Update' : 'Create'}</button>
    </form>
  );
};

export default ClothingForm;