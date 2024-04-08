import { useState, useEffect } from 'react';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';

import css from './App.module.css';

const getFeedback = () => {
    const Feedback = localStorage.getItem('FEEDBACK');
  return Feedback !== null ?
    JSON.parse(Feedback) :
    {
    good: 0,
    neutral: 0,
    bad: 0
  };
};

export default function App() {

  const [types, setTypes] = useState(getFeedback);

  const updateFeedback = (feedbackType) => {
    setTypes(() => ({
      ...types,
      [feedbackType]: types[feedbackType] + 1,
    }));
  };
 
  const resetFeedback = () => {
    setTypes(()=>({
      good: 0,
      neutral: 0,
      bad: 0,
    }));
  };
 
  const totalFeedback = types.good + types.neutral + types.bad;
  const positive = Math.round((types.good / totalFeedback) * 100);
  
  useEffect(() => {
    localStorage.setItem('FEEDBACK', JSON.stringify(types));
  }, [types]);

  return (
    <div className={css.container} >
      <Description />
      <Options update={updateFeedback} reset={resetFeedback} totalFeedback={totalFeedback} />
      {
         totalFeedback !== 0 ?
          <Feedback types={types} totalFeedback={totalFeedback} positive={positive} /> :
          <Notification />
      }
    </div>
  );
}