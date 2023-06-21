const ComponenteA1 = ({valor2,handlerChangeValor2}) => {
  return (
    <div>
        <span>Valor2: </span>
        <input name='valor2' value={valor2} onChange={handlerChangeValor2} placeholder="Ingesa el valor 2" />
    </div>
  );
};

export default ComponenteA1;