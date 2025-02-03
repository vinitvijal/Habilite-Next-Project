'use client';
import React, { useState } from 'react';

const ExerciseCalculator = () => {
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [message, setMessage] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(null);
  const [alternativeExercises, setAlternativeExercises] = useState([]);
  const MET_VALUES = {
    walking: 4.3,
    running: 10,
    swimming: 8,
    cycling: 6,
  }; 
  const calculateCaloriesBurned = (e) => {
    e.preventDefault();
    if (!gender || !age || !weight || !activity || !duration) {
      setMessage('Please fill in all fields.');
      return;
    }
    const weightKg = parseFloat(weight); 
    const ageNum = parseInt(age);
    const activityMET = parseFloat(activity); 
    const durationNum = parseFloat(duration); 
    if (isNaN(weightKg) || isNaN(ageNum) || isNaN(activityMET) || isNaN(durationNum)) {
      setMessage('Please enter valid numerical values.');
      return;
    }
    const durationHours = durationNum; 
    let bmr;
    if (gender === 'male') {
      bmr = 88.36 + (13.4 * weightKg) - (5.7 * ageNum);
    } else {
      bmr = 447.6 + (9.2 * weightKg) - (4.3 * ageNum);
    }
    const calories = Math.round(activityMET * weightKg * durationHours);
    const kilojoules = Math.round(calories * 4.184); 
    setCaloriesBurned({ kcal: calories, kJ: kilojoules });
    const alternativeList = Object.keys(MET_VALUES).map((exercise) => {
      const newDuration = Math.round((calories / (MET_VALUES[exercise] * weightKg)) * 60);
      return `${exercise.charAt(0).toUpperCase() + exercise.slice(1)}: ${calories} kcal in ${newDuration} min`;
    });
    setAlternativeExercises(alternativeList);
    setMessage(`${activity} - ${durationNum} Minutes\n\nYou burned ${calories} kcal or ${kilojoules} kJ`);
  };
  return (
    <div className="flex flex-col justify-center items-center w-1/2">
      <div className="w-full p-8 bg-white rounded-lg shadow-lg border-2">
        <h2 className="font-bold text-2xl text-second text-center mb-4">Exercise Calories Calculator</h2>
        <form onSubmit={calculateCaloriesBurned} className="flex flex-col space-y-4">
        <div>
            <label className="block text-md font-medium text-black">Enter an exercise to calculate your calories burned:</label>
            <select onChange={(e) => setActivity(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md">
              <option value="">Select</option>
              <optgroup label="Beliebteste Aktiviäten">
                <option value="4.3">Walking, general</option><option value="3">Walking, leisurely</option><option value="3.3">Cleaning, Household Tasks </option><option value="6">Strength Training</option><option value="3.5">Dog Walking</option><option value="3.8">Home Exercise</option><option value="6">Walking, fast (4 mph)</option><option value="5.5">Gym Exercise</option><option value="5">Elliptical, Crosstrainer</option><option value="3.5">Sit-Ups, Crunches</option>
              </optgroup>
              <optgroup label="Alle Aktiviäten">
                <option value="4.3">Archery</option><option value="6">Athletic Training, general</option><option value="3.5">BASE Jumping</option><option value="8.5">BMX Biking</option><option value="7">Badminton, competitive</option><option value="5.5">Badminton, general</option><option value="2.5">Baseball</option><option value="8">Basketball, competitive</option><option value="6">Basketball, general</option><option value="8">Beach Volleyball</option><option value="10">Biathlon</option><option value="2.5">Billiards</option><option value="3.8">Bowling</option><option value="12.8">Boxing, competitive</option><option value="5.5">Boxing, punching bag</option><option value="7.8">Boxing, sparring</option><option value="7">Broomball</option><option value="3.5">Bungee Jumping</option><option value="12">Canoeing, competitive</option><option value="4">Canoeing, general</option><option value="3.3">Canoeing, wildwater</option><option value="8.5">Car Racing</option><option value="6">Cheerleading</option><option value="4.5">Chopping Wood</option><option value="4.3">Circuit Training, cardiovascular</option><option value="8">Circuit Training, strength</option><option value="3.3">Cleaning, Household Tasks </option><option value="8">Climbing, competitive</option><option value="5.8">Climbing, general</option><option value="4.8">Cricket</option><option value="3.3">Croquet</option><option value="4">Curling</option><option value="5.8">Cycling, commute</option><option value="7.8">Cycling, fast</option><option value="6.4">Cycling, general</option><option value="4">Cycling, leisurely</option><option value="7.3">Dancing: Aerobic</option><option value="5">Dancing: Ballet, Modern, Jazz</option><option value="3.5">Dancing: Caribbean</option><option value="4.5">Dancing: Cultural Celebrations</option><option value="6.5">Dancing: Cumbia</option><option value="7.8">Dancing: Disco, Folk, Polka</option><option value="7.3">Dancing: Merengue</option><option value="4.5">Dancing: Salsa, Flamenco, Swing</option><option value="3">Dancing: Tango, Mambo, Cha-Cha</option><option value="3">Dancing: Waltz, Foxtrot, Tango</option><option value="4">Darts</option><option value="7">Diving</option><option value="5">Dog Sledding</option><option value="3.5">Dog Walking</option><option value="5">Elliptical, Crosstrainer</option><option value="5.3">Felling Trees</option><option value="6">Fencing</option><option value="7.8">Field Hockey</option><option value="1.8">Fishing</option><option value="8">Football, competitive</option><option value="4">Football, general</option><option value="3">Frisbee</option><option value="4.8">Golf</option><option value="5.5">Gym Exercise</option><option value="3.8">Gymnastics</option><option value="4">Hacky Sack</option><option value="10">Handball, competitive</option><option value="8">Handball, general</option><option value="3.5">Hang Gliding</option><option value="4">High Ropes Course</option><option value="6.3">Hiking, advanced</option><option value="4.3">Hiking, general</option><option value="7.8">Hockey</option><option value="3.8">Home Exercise</option><option value="3.5">Home Repair</option><option value="7.3">Horse Riding, gallop</option><option value="5.5">Horse Riding, general</option><option value="9">Horse Riding, jumping</option><option value="5.8">Horse Riding, trot</option><option value="5">Hunting</option><option value="12">Ice Dancing</option><option value="10">Ice Hockey, competitive</option><option value="8">Ice Hockey, general</option><option value="9">Ice Skating, competitive</option><option value="5.5">Ice Skating, general</option><option value="6.8">Indoor Cycling, Spinning (100 watts)</option><option value="8.8">Indoor Cycling, Spinning (150 watts)</option><option value="11">Indoor Cycling, Spinning (200 watts)</option><option value="3.5">Indoor Cycling, Spinning (50 watts)</option><option value="4.8">Indoor Cycling, Spinning (80 watts)</option><option value="14">Indoor Cycling, Spinning (over 200 watts)</option><option value="9">Indoor Rowing</option><option value="7">Indoor Rowing (100 watts)</option><option value="8.5">Indoor Rowing (150 watts)</option><option value="12">Indoor Rowing (200 watts)</option><option value="6">Interval Training</option><option value="12">Jai Alai</option><option value="6">Jazzercise</option><option value="6">Jet Skiing</option><option value="8.3">Jogging (5 mph)</option><option value="5.3">Judo</option><option value="4">Juggling</option><option value="5.3">Jujitsu</option><option value="11.8">Jump Roping, fast</option><option value="8.8">Jump Roping, general</option><option value="5.3">Karate</option><option value="12.5">Kayaking</option><option value="7">Kickball</option><option value="5.3">Kickboxing</option><option value="11">Kitesurfing</option><option value="8">Lacrosse</option><option value="5.3">Martial Arts</option><option value="1">Meditating</option><option value="3">Minigolf</option><option value="3.5">Motocross Racing</option><option value="14">Mountain Biking, competitive</option><option value="8.5">Mountain Biking, general</option><option value="5.3">Muay Thai</option><option value="9.5">Nordic Walking, fast</option><option value="4.8">Nordic Walking, general</option><option value="4">Paddle Boating</option><option value="3">Pilates</option><option value="4">Ping Pong</option><option value="8">Polo</option><option value="3.5">Pull-Ups</option><option value="3.5">Push-Ups</option><option value="3">Qigong</option><option value="6.5">Racewalking</option><option value="10">Road Cycling, competitive</option><option value="8">Road Cycling, leisurely</option><option value="7.5">Roller Skating</option><option value="12.3">Rollerblading, competitive</option><option value="9.8">Rollerblading, fast</option><option value="7">Rollerblading, general</option><option value="6">Rowing Machine</option><option value="12">Rowing, competitive</option><option value="5.8">Rowing, fast</option><option value="2.8">Rowing, general</option><option value="8.3">Rugby, competitive</option><option value="6.3">Rugby, general</option><option value="23">Running  (14 mph)</option><option value="16">Running (11 mph)</option><option value="19">Running (12 mph)</option><option value="19.8">Running (13 mph)</option><option value="9.8">Running (6 mph)</option><option value="11">Running (7 mph)</option><option value="11.8">Running (8 mph)</option><option value="12.8">Running (9 mph)</option><option value="14.5">Running, average jog (10 mph)</option><option value="7">Running, general</option><option value="3">Sailing</option><option value="11.8">Scuba Diving</option><option value="2.8">Sex, active</option><option value="1.8">Sex, general</option><option value="1.3">Sex, low activity</option><option value="6.4">Shoveling Snow</option><option value="3">Shuffleboard</option><option value="3.5">Sit-Ups, Crunches</option><option value="6">Skateboarding, competitive</option><option value="5">Skateboarding, general</option><option value="7">Ski Jumping</option><option value="7">Skiing, alpine</option><option value="9">Skiing, competitive</option><option value="6.8">Skiing, cross country</option><option value="3.5">Skydiving</option><option value="6">Slimnastics</option><option value="5">Snorkeling</option><option value="4.3">Snowboarding, alpine</option><option value="8">Snowboarding, competitive</option><option value="7.7">Snowshoeing</option><option value="10">Soccer, competitive</option><option value="7">Soccer, general</option><option value="4">Softball</option><option value="9.7">Squash</option><option value="8.8">Stair Climbing, fast</option><option value="4">Stair Climbing, general</option><option value="15">Stair Climbing, running</option><option value="6.5">Step Aerobics</option><option value="6">Strength Training</option><option value="2.3">Stretching</option><option value="5">Surfing, competitive</option><option value="3">Surfing, general</option><option value="4.8">Swimming, backstroke</option><option value="5.3">Swimming, breaststroke</option><option value="13.8">Swimming, butterfly</option><option value="9.5">Swimming, competitive backstroke</option><option value="10.3">Swimming, competitive breaststroke</option><option value="8.3">Swimming, crawl (50 yds/min)</option><option value="10">Swimming, crawl (75 yds/min)</option><option value="9.3">Swimming, fast</option><option value="6">Swimming, freestyle</option><option value="5.8">Swimming, general</option><option value="2.3">TV/Video Aerobics</option><option value="5.3">Tae Bo</option><option value="5.3">Taekwondo</option><option value="3">Tai Chi Chuan</option><option value="6">Tennis, doubles</option><option value="7.3">Tennis, general</option><option value="8">Tennis, singles</option><option value="2.8">Therapeutic Exercise</option><option value="3.5">Trampoline</option><option value="9">Treadmill</option><option value="8">Ultimate Frisbee</option><option value="5">Unicycling</option><option value="3.8">Video Game, aerobic</option><option value="7.2">Video Game, dancing</option><option value="4">Vinyasa, Power Yoga</option><option value="6">Volleyball, competitive</option><option value="3">Volleyball, general</option><option value="6">Wakeboarding</option><option value="6">Walking, fast (4 mph)</option><option value="4.3">Walking, general</option><option value="3">Walking, leisurely</option><option value="7">Wallyball</option><option value="2">Washing Car</option><option value="5.3">Water Aerobics</option><option value="10">Water Polo</option><option value="6">Water Skiing</option><option value="3">Water Volleyball</option><option value="5">Whitewater Rafting</option><option value="2.3">Wii Fit</option><option value="13.5">Windsurfing, competitive</option><option value="11">Windsurfing, general</option><option value="6">Wrestling</option><option value="4">Yard Work, general</option><option value="3">Yard Work, light</option><option value="6">Yard Work, vigorous</option><option value="2.7">Yoga</option><option value="2.5">Yoga: Hatha</option><option value="2">Yoga: Pranayama (Breathing Exercises)</option><option value="3.3">Yoga: Sun Salutations</option><option value="6.5">Zumba</option>
              </optgroup>
            </select>
          </div>
          <div>
            <label className="block text-md font-medium text-black">You are:</label>
            <div className="flex shadow-sm">
              <button 
                type="button" 
                onClick={() => setGender('male')} 
                className={`py-2 w-1/2 border-2 border-r-0 rounded-l-lg ${gender === 'male' ? 'bg-first text-white' : 'bg-gray-300'}`}>
                Male
              </button>
              <button 
                type="button" 
                onClick={() => setGender('female')} 
                className={`py-2 w-1/2 border-2 rounded-r-lg ${gender === 'female' ? 'bg-first text-white' : 'bg-gray-300'}`}>
                Female
              </button>
            </div>
          </div>
          <div className='flex gap-3 justify-center items-center'>
          <div>
            <label className="block text-md font-medium text-black">How old are you:</label>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-md font-medium text-black">How much do you weigh (kg):</label>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          </div>
          <div>
            <label className="block text-md font-medium text-black">Activity Duration (minutes):</label>
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <button type="submit" 
            className="mt-4 py-2 px-4 border border-transparent shadow-sm text-md font-medium rounded-md text-white bg-first hover:bg-third">
            Calculate Calories Burned
          </button>
        </form>
        <h1 className='pt-16 font-bold text-2xl text-second'>Your personal result:</h1>
        {message && (
          <div className="mt-4 p-4 bg-gray-100 rounded-md text-center">
            <p className="font-semibold">{message}</p>
            <p className="mt-2 font-medium">Other exercises with same amount of calories burned:</p>
            <ul className="mt-2 text-gray-600">
              {alternativeExercises.map((exercise, index) => (
                <li key={index}>{exercise}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExerciseCalculator;
