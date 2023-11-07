import React, { useState } from 'react';
import Magro from '../../imagens/Magro.webp';
import Padrao from '../../imagens/Padrao.webp';
import Sobrepeso from '../../imagens/Sobrepeso.webp';
import ObesidadeI from '../../imagens/Obesidade1.webp';
import ObesidadeII from '../../imagens/Obesidade2.webp';
import ObesidadeIII from '../../imagens/Obesidade3.webp';

function Calcula() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [imagemIMC, setImcImage] = useState(null);

  const calculaIMC = () => {
    const peso1 = parseFloat(peso);
    const altura1 = parseFloat(altura) / 100; 
    
    
    if (peso1 && altura1) {

      const resultado = peso1 / (altura1 * altura1);

      if (resultado <= 18.5) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Magro - Amarra que o vento ta forte`);
        setImcImage(Magro)
      } else if (resultado <= 24.9 && resultado > 18.5) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Padrão - Boa Chefe`);
        setImcImage(Padrao)
      } else if (resultado <= 29.9) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Sobrepeso - Partiu Esteira`);
        setImcImage(Sobrepeso)
      } else if (resultado <= 34.9) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Obesidade I - Cancela o Rodizio`);
        setImcImage(ObesidadeI)
      } else if (resultado <= 39.9) {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Obesidade II - Ja não vê o piru, ne?`);
        setImcImage(ObesidadeII)
      } else {
        setImc(`Seu IMC é ${resultado.toFixed(2)} = Obesidade III - Encomenda o Caixão Thais Carla`);
        setImcImage(ObesidadeIII)
      }
    } else {
      setImc('Por favor, insira valores válidos.');
    }
  };

  return (
    <div className='flex flex-col  justify-center'>
      <p className='corBrancoTexto'>Peso</p>
      <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-5"
        type="number"
        placeholder="Digite seu Peso / Ex: 90"
        onChange={(e) => setPeso(e.target.value)}
      />
      <p className='corBrancoTexto'>Altura</p>
      <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white mb-5"
        type="number"
        placeholder="Digite sua Altura (cm) / Ex: 189"
        onChange={(e) => setAltura(e.target.value)}
      />
      <button onClick={calculaIMC}
      className="botao-com-cor border rounded-md font-mono mb-5 p-3"
      >Calcular</button>
      {imc && <p className='corBrancoTexto mb-5'>{imc}</p>}
      {imagemIMC && <img src={imagemIMC} alt="Imagem do IMC" />}
    </div>
  );
}

export default Calcula;