const ComponenteA = ({valor1,handlerChangeValor1}) => {
  return (
    <div>
        <span>Valor1: </span>
        <input name='valor1' value={valor1} onChange={handlerChangeValor1} placeholder="Ingesa el valor 1" />
    </div>
  );
};

export default ComponenteA;