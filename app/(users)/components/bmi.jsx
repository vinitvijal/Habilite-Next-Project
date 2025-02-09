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
        <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-20 gap-12 m-10 lg:m-0 mt-4 p-2">
            <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg border-2 border-third/35 bg-opacity-50">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                    <div className="justify-center items-center min-w-fit">
                        <label className="block text-lg text-black">Select your gender:</label>
                        <div className="flex">
                            <button
                                type="button"
                                onClick={() => setGender('male')}
                                className={`py-2 px-4 w-full border-2 border-white/20 border-r-0 rounded-l-lg transition-colors duration-300 ${gender === 'male' ? 'bg-gradient-to-r from-second/90 to-first text-white' : 'bg-third/90 text-black hover:bg-gray-200'}`}
                            >
                                Male
                            </button>
                            <button
                                type="button"
                                onClick={() => setGender('female')}
                                className={`py-2 px-4 w-full border-2 border-white/20 rounded-r-lg transition-colors duration-300 ${gender === 'female' ? 'bg-gradient-to-r from-second/90 to-first text-white' : 'bg-third/90 text-black hover:bg-gray-200'}`}
                            >
                                Female
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-lg  text-black">How old are you?</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-black/50 sm:text-lg bg-white text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-lg  text-black">How tall are you? (cm)</label>
                        <input
                            type="number"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:outline-none focus:border-black/50  sm:text-lg bg-white text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-lg  text-black">How much do you weigh? (kg)</label>
                        <input
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:outline-none focus:border-black/50  sm:text-lg bg-white text-black"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <button
                            type="submit"
                            className="mt-4 inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-gradient-to-r from-second/90 to-first hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform transform hover:scale-101"
                        >
                            Calculate your BMI
                        </button>
                        {message && <p className="mt-4 text-black text-md text-center">{message}</p>}
                    </div>
                </form>
            </div>
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg border-2 flex justify-center items-center">
                <table className="w-full text-left">
                    <thead className="bg-gradient-to-r from-second/90 to-first text-white">
                        <tr>
                            <th className="border-b-2 border-gray-300 px-4 py-2 text-white text-lg" style={{ width: '50%' }}>BMI Range</th>
                            <th className="border-b-2 border-gray-300 px-4 py-2 text-white text-lg" style={{ width: '50%' }}>Category</th>
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
