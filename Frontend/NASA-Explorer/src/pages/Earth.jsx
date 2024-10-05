import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import 'tailwindcss/tailwind.css';

const Earth = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [date, setDate] = useState('');
  const [imagePreview, setImagePreview] = useState('https://cdn.usegalileo.ai/stability/f5b14522-7355-451c-92c1-5f9a0666d936.png'); // Default preview

  const handleSubmit = () => {
    // Handle your form submission and API call here
    console.log({ latitude, longitude, date });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#111c22]">
      <div className="max-w-[960px] w-full p-4 bg-[#111c22] rounded-lg">
        <div className="flex flex-col gap-3 p-4">
          <h1 className="text-white text-[32px] font-bold leading-tight">Satellite Imagery</h1>
          <p className="text-[#92b5c9] text-sm">Enter your coordinates and date to get a satellite image</p>
        </div>

        <div className="flex flex-wrap gap-4 px-4 py-3">
          <TextField
            label="Latitude"
            variant="filled"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            fullWidth
            className="bg-[#233a48] text-white placeholder-[#92b5c9] rounded-xl"
            InputLabelProps={{
              style: { color: '#92b5c9' }, // Change label color
            }}
            InputProps={{
              style: { color: '#fff' }, // Change input text color
            }}
          />
          <TextField
            label="Longitude"
            variant="filled"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            fullWidth
            className="bg-[#233a48] text-white placeholder-[#92b5c9] rounded-xl"
            InputLabelProps={{
              style: { color: '#92b5c9' },
            }}
            InputProps={{
              style: { color: '#fff' },
            }}
          />
        </div>

        <div className="flex flex-wrap gap-4 px-4 py-3">
          <TextField
            label="Date"
            variant="filled"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            className="bg-[#233a48] text-white placeholder-[#92b5c9] rounded-xl"
            InputLabelProps={{
              shrink: true, // Ensure label doesn't overlap date picker
              style: { color: '#92b5c9' },
            }}
            InputProps={{
              style: { color: '#fff' },
            }}
          />
        </div>

        <div className="flex px-4 py-3 justify-end">
          <Button
            variant="contained"
            onClick={handleSubmit}
            className="bg-[#139cec] text-white font-bold"
          >
            Get Satellite Image
          </Button>
        </div>

        <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Image Preview
        </h2>
        <div className="flex justify-center w-full bg-[#111c22] p-4">
          <div className="w-full aspect-[3/2] rounded-xl overflow-hidden">
            <div
              className="w-full bg-center bg-no-repeat bg-cover h-full"
              style={{
                backgroundImage: `url(${imagePreview})`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Earth;
