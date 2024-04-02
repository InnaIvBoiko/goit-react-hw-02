import { useState } from 'react';
import Description from '../Description/Description.jsx';
// import Options from '../Options/Options.jsx';
// import Feedback from '../Feedback/Feedback.jsx';

import './App.module.css';

export default function App() {

  const [types, setTypes] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  }); 

  const handleClickGood = () => {
    const countGood = types.good;
    setTypes({
      ...types,
      good: countGood + 1,
    });
    return types;
  };
  const handleClickNeutral = () => {
    const countNeut = types.neutral;
    setTypes({
      ...types,
      neutral: countNeut + 1,
    });
    return types;
  };

  const handleClickBad = () => {
    const countBad = types.bad;
    setTypes({
      ...types,
      bad: countBad + 1,
    });
    return types;
  };

  const handleClickReset = () => {

    setTypes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    return types;
  };

  const totalFeedback = types.good + types.neutral + types.bad;
  const positive = Math.round((types.good / totalFeedback) * 100);

  // const isVisible = (totalFeedback) => {
  //   if (totalFeedback === 0) {
  //     const x = false;
  //     return x;
  //   }
  // };


  return (
    <>
      <Description />
      {/* <Options /> */}
      {/* <Feedback types={types} /> */}

      <div>
        <button onClick={handleClickGood}> Good</button>
        <button onClick={handleClickNeutral}> Neutral</button>
        <button onClick={handleClickBad}> Bad</button>
        <button onClick={handleClickReset}>Reset</button>
      </div>
    
      <div>
        <p>Good: {types.good}</p>
        <p>Neutral: {types.neutral}</p>
        <p>Bad: {types.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positive}%</p>
      </div>

    </>
  );
}

