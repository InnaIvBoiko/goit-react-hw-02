export default function Feedback({types: { good,
    neutral,
    bad, },
    totalFeedback,
    positive
}) {
        return(
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {totalFeedback}</p>
            <p>Positive: {positive}%</p>
        </>
    );   
}