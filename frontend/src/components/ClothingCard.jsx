import React from 'react';
import { Link } from 'react-router-dom';

const ClothingCard = ({ clothing, onDelete }) => {
  return (
    <div className="clothing-card">
      <img src={clothing.imageUrl} alt={clothing.name} />
      <h3>{clothing.name}</h3>
      <p>{clothing.description}</p>
      <p>${clothing.price}</p>
      <Link to={`/edit/${clothing.id}`}>Edit</Link>
      <button onClick={() => onDelete(clothing.id)}>Delete</button>
    </div>
  );
};

export default ClothingCard;