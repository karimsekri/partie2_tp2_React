import { useCallback } from "react";

const CounterExo5 = (props: {onIncrementerCptP: () => void, onDecrementerCptP: () => void, cpt: number }) => {

   
    return (

        <div>
            <h2>cpt : {props.cpt} </h2>            
            <button onClick={props.onIncrementerCptP}>incrementer</button>
            <button onClick={props.onDecrementerCptP}>decrementer</button>
        </div>
    );
}

export default CounterExo5