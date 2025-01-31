'use client';
import React, { useState } from 'react';

const BmiCalculator = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('Enter your basic information to start calculating.');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!gender || !age || !height || !weight) {
      setMessage('Please fill in all fields.');
      return;
    }

    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(calculatedBmi);

    let bmiMessage = `Your BMI is ${calculatedBmi}. `;
    if (calculatedBmi < 16) {
      bmiMessage += 'You are underweight.';
    } else if (calculatedBmi < 22.5) {
      bmiMessage += 'You have a healthy weight.';
    } else if (calculatedBmi < 27.5) {
      bmiMessage += 'You are overweight.';
    } else if (calculatedBmi < 32.5) {
      bmiMessage += 'You are obese.';
    } else if (calculatedBmi < 37.5) {
      bmiMessage += 'You are severely obese.';
    } else {
      bmiMessage += 'You are morbidly obese.';
    }
    setMessage(bmiMessage);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-10">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg border-2">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <div>
            <label className="block text-md font-medium text-black">You are:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-second-500 focus:border-second-500 sm:text-md">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-md font-medium text-black">How old are you?</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-second-500 focus:border-second-500 sm:text-md" />
          </div>
          <div>
            <label className="block text-md font-medium text-black">How tall are you? (cm)</label>
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-second-500 focus:border-second-500 sm:text-md" />
          </div>
          <div>
            <label className="block text-md font-medium text-black">How much do you weigh? (kg)</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-second-500 focus:border-second-500 sm:text-md" />
          </div>
          <button type="submit" className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-first hover:bg-fourth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-second">Calculate your BMI</button>
        </form>

        {message && <p className="mt-4 text-first text-sm">{message}</p>}
      </div>

      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg border-2 flex justify-center items-center">
          <table className="w-full text-left">
            <thead className="bg-first text-white">
              <tr>
                <th className="border-b-2 border-gray-300 px-4 py-2 text-white text-md" style={{ width: '50%' }}>BMI Range</th>
                <th className="border-b-2 border-gray-300 px-4 py-2 text-white text-md" style={{ width: '50%' }}>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">&lt; 16</td>
                <td className="border-b border-gray-300 px-4 py-2">Underweight</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">16 - 22.5</td>
                <td className="border-b border-gray-300 px-4 py-2">Healthy weight</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">22.5 - 27.5</td>
                <td className="border-b border-gray-300 px-4 py-2">Overweight</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">27.5 - 32.5</td>
                <td className="border-b border-gray-300 px-4 py-2">Obese</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">32.5 - 37.5</td>
                <td className="border-b border-gray-300 px-4 py-2">Severely obese</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 px-4 py-2">37.5 and over</td>
                <td className="border-b border-gray-300 px-4 py-2">Morbidly obese</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  );
};

export default BmiCalculator;
