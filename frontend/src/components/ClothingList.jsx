import React, { useEffect, useState } from 'react';
import { getAllClothing, deleteClothing } from '../services/api';
import ClothingCard from './ClothingCard';

const ClothingList = () => {
  const [clothing, setClothing] = useState([]);

  useEffect(() => {
    fetchClothing();
  }, []);

  const fetchClothing = () => {
    getAllClothing().then(response => {
      setClothing(response.data);
    });
  };

  const handleDelete = (id) => {
    deleteClothing(id).then(() => {
      fetchClothing();
    });
  };

  return (
    <div className="clothing-list">
      {clothing.map(item => (
        <ClothingCard key={item.id} clothing={item} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ClothingList;