import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg';

const ExPage = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [ex, setEx] = useState(null); 

  useEffect(() => {
    const getEx = async () => {
      if (id === 'new') {
        setEx({ name: '', weight: '', sets: '', reps: '' });
        return;
      }

      try {
        const response = await fetch(`http://127.0.0.1:8000/api/exs/${id}`);
        const data = await response.json();
        setEx(data);
      } catch (error) {
        console.error('Error fetching ex:', error);
      }
    };

    getEx();
  }, [id]);

  
  const updateEx = async () => {
    try {
      await fetch(`http://127.0.0.1:8000/api/exs/${id}/update/`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ex),
      });
      console.log('Ex updated successfully');
    } catch (error) {
      console.error('Error updating ex:', error);
    }
  };

  const createEx = async () => {
    try {
      await fetch(`http://127.0.0.1:8000/api/exs/create/`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ex),
      });
      console.log('Ex created successfully');
    } catch (error) {
      console.error('Error creating ex:', error);
    }
  };

  const deleteEx = async () => {
    try {
      await fetch(`http://127.0.0.1:8000/api/exs/${id}/delete/`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Ex deleted successfully');
      navigate('/');
    } catch (error) {
      console.error('Error deleting ex:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEx((prevEx) => ({
      ...prevEx,
      [name]: value,
    }));
  };

  const handleArrowLeftClick = () => {
    if (id === 'new') {
      createEx();
    } else {
      updateEx(); 
    }
    navigate('/'); 
  };

  if (!ex) {
    return <div>Loading...</div>;
  }

  return (
    <div className='ex'>
      <div className='ex-header'>
        <h3>
          <ArrowLeft onClick={handleArrowLeftClick} />
        </h3>
      </div>
      <div className='ex-details'>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-input"
            value={ex.name}
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="weight">Weight (kg)</label>
          <input
            type="text"
            id="weight"
            name="weight" 
            className="rounded-input"
            value={ex.weight}
            onChange={handleChange} 
          />
        </div>
        <div>
          <label htmlFor="sets">Sets</label>
          <input
            type="text"
            id="sets"
            name="sets"
            className="rounded-input"
            value={ex.sets}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="reps">Reps</label>
          <input
            type="text"
            id="reps"
            name="reps" 
            className="rounded-input"
            value={ex.reps}
            onChange={handleChange} 
          />
        </div>
      </div>
      {id !== 'new' && <button onClick={deleteEx} className='delete-button'>DELETE</button>}
    </div>
  );
};

export default ExPage;
