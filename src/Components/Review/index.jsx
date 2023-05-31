import React, { useState } from 'react';
import { Rating, Typography, TextField, Button } from '@mui/material';
import axios from 'axios';


const Review = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [number, setNumber] = useState(1);
  const restDataString = localStorage.getItem('RestData');
  const id = JSON.parse(restDataString)?.id;
  console.log(id);
  const token = JSON.parse(restDataString)


  const handleValChange = (event, value) => {
    setRating(value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put(
        `https://pf-backend-production-5a61.up.railway.app/restaurants/${id}`,
        {
          valoraciones: {
            rating: rating,
            comment: comment,
            number: number,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
        }
      );
      console.log(response.data); 
      setRating(0);
      setComment('');
      setNumber((prevNumber) => prevNumber + 1);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <Typography variant="h6">Deja tu valoración:</Typography>
        <Rating name="rating" value={rating} onChange={handleValChange} />
      </div>
      <div>
        <TextField
            label="Comentario"
            value={comment}
            onChange={handleCommentChange}
            multiline
            rows={4}
        />
        <br/>
        <div style={{ marginTop: '8px' }}>
            <Button variant="contained" onClick={handleSubmit}>
                Enviar
            </Button>
        </div>
      </div>
    </div>
    
  );
};

export default Review;
