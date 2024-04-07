import css from './Options.module.css';

export default function Options({update, reset, isVisible}) {
    return (
        <div className={css.options} >       
        <button className={css.btn} onClick={()=>update('good')}> Good</button>
        <button className={css.btn} onClick={()=>update('neutral')}> Neutral</button>
        <button className={css.btn} onClick={()=>update('bad')}> Bad</button>    
        {isVisible && <button className={css.btn} onClick={reset}>Reset</button>}
        </div>
    );
}