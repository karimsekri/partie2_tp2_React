import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import CounterExo3 from './CounterExo3'
import CounterExo4 from './CounterExo4'

function App() {
  const [cptP, setcptP] = useState(0);

  const incrementerLes2Compteurs = useCallback(
    () => setcptP(cptP + 1 ) ,[cptP]
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
      <CounterExo4 cpt={cptP}/>
      <CounterExo4 cpt={cptP} />
      <button onClick={incrementerLes2Compteurs}>incrementerLes2Compteurs</button>
    </>
  )
}

export default App
