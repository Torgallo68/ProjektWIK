import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ ex }) => {
  const updatedDate = new Date(ex.updated);
  
  const formattedDate = updatedDate.toISOString().split('T')[0]; 

  return (
    <Link to={`/ex/${ex.id}`}>
      <div className='exs-list-item'>
        <div className="ex-content">
          <h3><span className="ex-date">{formattedDate}</span>{ex.name}</h3>
        </div>
      </div>
    </Link>
  );
}

export default ListItem;
