// import css from './Feedback.module.css';

export default function Feedback({types:
    good,
    neutral,
    bad
}) {

    const totalFeedback = good + neutral + bad;
    const positive = Math.round((good / totalFeedback) * 100);

    return(
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: { positive}%</p>
        </>
    );   
}