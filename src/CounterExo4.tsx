import { useCallback, useMemo, useState } from 'react';

const CounterExo4 = (props: { cpt: number }) => {
    const [compteur, setCompteur] = useState(0);

    const incrementeCompteur = useCallback(
        () => {setCompteur(compteur + 1) }, [compteur]

    );

    const decrementeCompteur = useCallback(
        () => {setCompteur(compteur - 1) }, [compteur]
    );

    const maxValue = useMemo(
        () => {
            if (compteur + props.cpt <= 10) {
                return compteur + props.cpt
            } else {
                
                return 10
            }

        }, [compteur, props.cpt]
    );

    const minValue = useMemo(
        () => {
            if (compteur + props.cpt > 0) {
                return compteur + props.cpt
            } else {
                
                return 0
            }

        }, [compteur, props.cpt]
    );


    return (
        <div>
            <h2> Counter : {maxValue < 0 ? (minValue):(maxValue)} </h2>
            <h2> minValue : {minValue} </h2>
            <h2>compteur : {compteur} </h2>
            <h2>props.cpt : {props.cpt} </h2>
            <button onClick={incrementeCompteur}>incrementer</button>
            <button onClick={decrementeCompteur}>decrementer</button>
        </div>
    );
}

export default CounterExo4;