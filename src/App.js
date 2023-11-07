import './App.css';
import Calcula from './componentes/Calcular'

function App() {
  return (
    <body className="bg-gss-azul">
    <div className="flex place-content-center items-center h-[100vh] flex flex-col" >
      <p className="corBrancoTexto text-5xl mb-5 font-mono p-5">Calcule seu IMC</p>
     <Calcula></Calcula>
    </div>
    </body>
  );
}

export default App;
