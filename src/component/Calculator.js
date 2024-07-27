import {React, useState } from 'react'
import Header from './Header';
import Footer from './Footer';


const BmiCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');
  
    const calculateBMI = () => {
      if (!weight || !height) {
        alert('Please enter both weight and height!');
        return;
      }
      // BMI CALCULATIONS

      const heightInMeters = parseFloat(height) / 100;
      const bmiValue = (parseFloat(weight) / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      //BMI VALUES
      let bmiStatus = '';
      if (bmiValue < 18.5) {
        bmiStatus = 'Underweight';
      } else if (bmiValue < 24.9) {
        bmiStatus = 'Normal weight';
      } else if (bmiValue < 29.9) {
        bmiStatus = 'Overweight';
      } else {
        bmiStatus = 'Obesity';
      }
      setStatus(bmiStatus);
    };
  
    return (
        
      <div className='rounded-xl text-center bg-green-200 h-screen'>
                <Header></Header>
                <div className='mt-16'>
        <h1>BMI Calculator</h1>
        <div className='bg-green-200'>
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder='Enter your weight'
            />
          </label>
        </div>
        <div className='bg-green-200'>
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder='Enter your height'
            />
          </label>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2' onClick={calculateBMI}>Calculate</button>
        {bmi && (
          <div className='bg-green-200'>
            <h3>Your BMI: {bmi}</h3>
            <h3>Status: {status}</h3>
          </div>
        )}
        <Footer></Footer>
        </div>
      </div>
    );
  };
  
  export default BmiCalculator;
