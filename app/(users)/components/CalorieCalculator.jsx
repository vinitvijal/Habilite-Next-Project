'use client';
import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [feet, setFeet] = useState('');
  const [inches, setInches] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [calories, setCalories] = useState(null);
  const [message, setMessage] = useState('Enter your basic information to start calculating.');

  const calculateCalories = (e) => {
    e.preventDefault();

    if (!gender || !age || !feet || !inches || !weight || !activityLevel) {
      setMessage('Please fill in all fields.');
      return;
    }

    const height = (parseInt(feet) * 30.48) + (parseInt(inches) * 2.54); 
    const weightNum = parseFloat(weight)*0.45359237 ;
    const ageNum = parseInt(age);

    if (isNaN(height) || isNaN(weightNum) || isNaN(ageNum)) {
      setMessage('Please enter valid numerical values.');
      return;
    }

    let bmr;
    if (gender === 'male') {
      bmr = 10 * weightNum + 6.25 * height - 5 * ageNum + 5;
    } else {
      bmr = 10 * weightNum + 6.25 * height - 5 * ageNum - 161;
    }

    let activityMultiplier;
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'light':
        activityMultiplier = 1.375;
        break;
      case 'moderate':
        activityMultiplier = 1.55;
        break;
      case 'active':
        activityMultiplier = 1.725;
        break;
      case 'very active':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1;
    }

    const totalCalories = Math.round(bmr * activityMultiplier);
    const calorieLoss05 = totalCalories - 500;
    const calorieLoss1 = totalCalories - 1000;
    const calorieGain05 = totalCalories + 500;
    const calorieGain1 = totalCalories + 1000;
    
    setCalories({
      maintain: totalCalories,
      lose05: calorieLoss05,
      lose1: calorieLoss1,
      gain05: calorieGain05,
      gain1: calorieGain1,
    });

    setMessage(`Your Daily Calories\n${totalCalories}\nYou need ${totalCalories} Calories/day to maintain your weight.\n\nYou need ${calorieLoss05} calories/day to lose 0.5 kg per week.\n\nYou need ${calorieLoss1} calories/day to lose 1 kg per week.\n\nYou need ${calorieGain05} calories/day to gain 0.5 kg per week.\n\nYou need ${calorieGain1} Calories/day to gain 1 kg per week.`);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-10">
      <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg border-2">
        <form onSubmit={calculateCalories} className="flex flex-col space-y-5">
          <div>
            <label className="block text-md font-medium text-black">Gender:</label>
            <div className="flex shadow-sm justify-center items-center min-w-fit">
              <button 
                type="button" 
                onClick={() => setGender('male')} 
                className={`py-1 w-full border-2 border-white/45 border-r-0 rounded-l-lg ${gender === 'male' ? 'bg-first' : 'bg-third'} ${gender === 'male' ? 'text-white' : ''}`}>Male</button>
              <button 
                type="button" 
                onClick={() => setGender('female')} 
                className={`py-1 w-full border-2 border-white/45 rounded-r-lg ${gender === 'female' ? 'bg-first' : 'bg-third'} ${gender === 'female' ? 'text-white' : ''}`}>Female</button>
            </div>
          </div>
          <div>
            <label className="block text-md font-medium text-black">Age:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-md font-medium text-black">Height:</label>
            <div className='flex shadow-sm justify-center items-center min-w-fit gap-2 py-2'>
              {[1,2,3,4,5,6,7].map(ft => (
                <button key={ft} onClick={() => setFeet(ft)} className={`bg-third py-1 px-1 w-full border-2 border-white/45 rounded-full ${feet == ft ? 'bg-first' : ''}`}>{ft}</button>
              ))}
            </div>
            <select onChange={(e) => setInches(e.target.value)} className='mt-1 block w-full py-2 px-2 bg-white rounded-md'>
              {[...Array(12).keys()].map(inch => (
                <option key={inch} value={inch}>{inch}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-md font-medium text-black">Weight (pounds):</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-md font-medium text-black">Activity Level:</label>
            <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Select</option>
              <option value="sedentary">Sedentary (little to no exercise)</option>
              <option value="light">Lightly active (light exercise 1-3 days per week)</option>
              <option value="moderate">Moderately active (moderate exercise 3-5 days per week)</option>
              <option value="active">Active (hard exercise 6-7 days per week)</option>
              <option value="very active">Very active (very hard exercise & physical job)</option>
            </select>
          </div>
          <button type="submit" className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-first hover:bg-fourth">Calculate Calories</button>
        </form>
      </div>
      <div className=' justify-center items-center flex'>
        {message && <pre className="mt-4 text-first text-sm whitespace-pre-wrap">{message}</pre>}
      </div>
    </div>
  );
};

export default CalorieCalculator;
