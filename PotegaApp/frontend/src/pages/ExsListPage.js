import React, { useState, useEffect } from 'react';
import ListItem from '../components/ListItem';
import AddButton from '../components/AddButton';

const ExsListPage = () => {
  let [exs, setExs] = useState([]);

  useEffect(() => {
    getExs();
  }, []);

  let getExs = async () => {
    try {
      let response = await fetch('http://127.0.0.1:8000/api/exs/');
      let data = await response.json();
      console.log('DATA', data);
      setExs(data);
    } catch (error) {
      console.error('Error fetching exs:', error);
    }
  };

  return (
    <div className='exs'>
      <div className='exs-header'>
          <h2 className='exs-title'>&#9782; Exercises</h2>
          <p className='exs-count'>{exs.length}</p>
      </div>
      <div className="exs-list">
        {exs.map((ex, index) => (
          <ListItem key={index} ex={ex}> 
          </ListItem>
        ))}
      </div>
      <AddButton/>
    </div>
  );
};

export default ExsListPage;
