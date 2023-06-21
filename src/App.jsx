import { useState} from 'react';
import ComponenteA from './components/ComponenteA';
import ComponenteA1 from './components/ComponenteA1';
import ComponenteB from './components/ComponenteB';
import ComponenteC from './components/ComponenteC';

const App = () => {
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [signo, setSigno] = useState('');
  const [respuesta, setRespuesta] = useState('0');

  const handlerChangeValor1 = ({ target }) => {
		setValor1(target.value);
	};

  const handlerChangeValor2 = ({ target }) => {
		setValor2(target.value);
	};

  const handleChangeSigno = ({ target }) => {
		setSigno(target.value);
	};

  const handlerCalculate = () => {
    setRespuesta(valor1 * valor2);
  };

  return (
    <div>
        <br />
        <ComponenteA
           name={valor1}
				   handlerChangeValor1={handlerChangeValor1} 
        />
        <br />
        <ComponenteB 
           name={signo}
				   handleChangeSigno={handleChangeSigno} 
        />
        <br />
        <ComponenteA1
           name={valor2}
				   handlerChangeValor2={handlerChangeValor2} 
        />
        <br />
        <ComponenteC
           name={respuesta}
           handlerCalculate={handlerCalculate} 
        />
        <br />
        <span>Resultado: </span>
        <input value={respuesta}/>
    </div>
  );
};

export default App;