import { useState, useEffect } from 'react';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';

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
    const [isResetVisible, setIsResetVisible] = useState(() => {
      totalFeedback === 0;
    });

    useEffect(() => {
      setIsResetVisible(totalFeedback === 0 ? false : true);
    }, [totalFeedback]);
  
      useEffect(() => {
        localStorage.setItem('FEEDBACK', JSON.stringify(types));
    }, [types]);

    return (
      <div className={css.container} >
        <Description />
        <Options update={updateFeedback} reset={resetFeedback} isVisible={isResetVisible} />
        {
          isResetVisible ?
            <Feedback types={types} totalFeedback={totalFeedback} /> :
            <p>No feedback yet</p>
        }
      </div>
    );
  }