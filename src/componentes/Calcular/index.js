import React, { useState } from 'react';

function Calcula() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calculaIMC = () => {
    const peso1 = parseFloat(peso);
    const altura1 = parseFloat(altura) / 100; // Converter altura de cm para metros

    if (peso1 && altura1) {
      const resultado = peso1 / (altura1 * altura1);

      if (resultado <= 18.5) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Magro`);
      } else if (resultado <= 24.9 && resultado > 18.5) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Padrão`);
      }
      else if (resultado <= 25 && resultado >= 29.9) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Sobrepeso`);
      }
      else if (resultado <= 30 && resultado >= 34.9) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Obesidade I`);
      }
      else if (resultado <= 35 && resultado >= 39.9) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Obesidade II`);
      }
      else if (resultado >= 40) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Obesidade III`);
      }
    } else {
      setImc('Por favor, insira valores válidos.');
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Digite seu Peso / Ex: 90"
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
        type="number"
        placeholder="Digite sua Altura (cm) / Ex: 189"
        onChange={(e) => setAltura(e.target.value)}
      />
      <button onClick={calculaIMC}>Calcular</button>
      {imc && <p>{imc}</p>}
    </div>
  );
}

export default Calcula;
