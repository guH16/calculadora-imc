import React, { useState } from 'react';

function Calcula() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calculaIMC = () => {
    const peso1 = parseFloat(peso);
    const altura1 = parseFloat(altura) / 100; 

    if (peso1 && altura1) {
      const resultado = peso1 / (altura1 * altura1);

      if (resultado <= 18.5) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Magro`);
      } else if (resultado <= 24.9 && resultado > 18.5) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Padrão`);
      } else if (resultado <= 29.9) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Sobrepeso`);
      } else if (resultado <= 34.9) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Obesidade I`);
      } else if (resultado <= 39.9) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Obesidade II`);
      } else {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Obesidade III`);
      }
    } else {
      setImc('Por favor, insira valores válidos.');
    }
  };

  return (
    <div className='flex flex-col  justify-center'>
      <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        type="number"
        placeholder="Digite seu Peso / Ex: 90"
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        type="number"
        placeholder="Digite sua Altura (cm) / Ex: 189"
        onChange={(e) => setAltura(e.target.value)}
      />
      <button onClick={calculaIMC}
      class="botao-com-cor border rounded-md font-mono"
      >Calcular</button>
      {imc && <p className='corBrancoTexto'>{imc}</p>}
    </div>
  );
}

export default Calcula;