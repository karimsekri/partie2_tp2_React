import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import CounterExo3 from './CounterExo3'
import CounterExo4 from './CounterExo4'
import CounterExo5 from './CounterExo5'

function App() {
  const [cptP1, setcptP1] = useState(0);
  const [cptP2, setcptP2] = useState(0);


  const incrementerLes2Compteurs = useCallback(
    () => {
      setcptP1(cptP1 + 1);
      setcptP2(cptP2 + 1)
    }, [cptP1, cptP2]
  );

  const handleIncrementerCptP1 = useCallback(
    () => {
      setcptP1(cptP1 + 1);
    }, [cptP1]
  );

  const handleDecrementerCptP1 = useCallback(
    () => {
      setcptP1(cptP1 - 1);
    }, [cptP1]
  );

  const handleIncrementerCptP2 = useCallback(
    () => {
      setcptP2(cptP2 + 1);
    }, [cptP2]
  );

  const handleDecrementerCptP2 = useCallback(
    () => {
      setcptP2(cptP2 - 1);
    }, [cptP2]
  );



  return (
    <>
      {/* exercice 1 & 2 */}
      {/* <Counter />
      <Counter /> */}

      {/* exercice 3  */}
      {/* <CounterExo3 cpt={cptP}/>
      <CounterExo3 cpt={cptP}/>
      <button onClick={incrementerLes2Compteurs}>incrementerLes2Compteurs</button> */}

      {/* exercice 4  */}
      {/* <CounterExo4 cpt={cptP} />
      <CounterExo4 cpt={cptP} />
      <button onClick={incrementerLes2Compteurs}>incrementerLes2Compteurs</button> */}

      {/* exercice 5  */}
      <h1>exercice 5 </h1>
      <CounterExo5 cpt={cptP1}
        onIncrementerCptP={handleIncrementerCptP1}
        onDecrementerCptP={handleDecrementerCptP1}
      />
      <CounterExo5 cpt={cptP2}
        onIncrementerCptP={handleIncrementerCptP2}
        onDecrementerCptP={handleDecrementerCptP2}
      />

      <button onClick={incrementerLes2Compteurs}>incrementerLes2Compteurs</button>
    </>
  )
}

export default App
