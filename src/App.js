import React, { useState } from 'react';  
import logo from './logoof.png';
import './App.css';
import { Bar } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

function App() {
  const [cidade, setCidade] = useState('');
  const [servico, setServico] = useState('');
  const [statusSelecionado, setStatus] = useState(''); 
  const [periodo, setPeriodo] = useState('');
  const [ano, setAno] = useState('');
  const [numero, setNumero] = useState(null);

  const [qtdAprovados, setQtdAprovados] = useState(0);
  const [qtdApresentados, setQtdApresentados] = useState(0);

  const cidadesAlagoas = ['Maceió', 'Arapiraca', 'Rio Largo', 'Satuba', 'Pilar'];
  const servicos = ['Acolhimento', 'Oficina', 'Intervenção', 'Atividade Educativa', 'Terapia'];
  const statusOptions = ['Aprovados', 'Apresentados']; 
  const periodos = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const anos = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']; 

  const calcularNumero = () => {
    if (cidade && servico && statusSelecionado && periodo && ano) {
      const resultado = 
        cidadesAlagoas.indexOf(cidade) + 
        servicos.indexOf(servico) + 
        periodos.indexOf(periodo) + 
        statusOptions.indexOf(statusSelecionado) +
        anos.indexOf(ano) + 
        1;

      setNumero(resultado);

      if (statusSelecionado === 'Aprovados') {
        setQtdAprovados(qtdAprovados+1);
      } else if (statusSelecionado === 'Apresentados') {
        setQtdApresentados(qtdApresentados+1);
      }
    }
  };

  const data = {
    labels: ['Aprovados', 'Apresentados'],
    datasets: [
      {
        label: 'Quantidade',
        data: [qtdAprovados, qtdApresentados],
        backgroundColor: ['rgba(75, 192, 192, 0.6)', 'rgba(255, 99, 132, 0.6)'],
      },
    ],
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SUAPS | Sistema Único de Atenção Psicossocial</p>
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>

        <div className="filters">
          <select value={cidade} onChange={(e) => setCidade(e.target.value)}>
            <option value="">Selecione uma cidade</option>
            {cidadesAlagoas.map((cidade, index) => (
              <option key={index} value={cidade}>
                {cidade}
              </option>
            ))}
          </select>

          <select value={servico} onChange={(e) => setServico(e.target.value)}>
            <option value="">Selecione um serviço</option>
            {servicos.map((servico, index) => (
              <option key={index} value={servico}>
                {servico}
              </option>
            ))}
          </select>

          <select value={statusSelecionado} onChange={(e) => setStatus(e.target.value)}>
            <option value="">Selecione um status</option>
            {statusOptions.map((status, index) => ( 
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select value={periodo} onChange={(e) => setPeriodo(e.target.value)}>
            <option value="">Selecione um período</option>
            {periodos.map((periodo, index) => (
              <option key={index} value={periodo}>
                {periodo}
              </option>
            ))}
          </select>

          <select value={ano} onChange={(e) => setAno(e.target.value)}>
            <option value="">Selecione o ano</option>
            {anos.map((ano, index) => (
              <option key={index} value={ano}>
                {ano}
              </option>
            ))}
          </select>
        </div>

        {numero !== null && (
          <div className="resultado">
            <h3>Apresentados: {qtdApresentados} |  Aprovados: {qtdAprovados}</h3>
          </div>
        )}

        <button onClick={calcularNumero} style={{ marginTop: '25px', marginLeft: '10px', width: '150px', height: '40px', fontSize: '15px' }}>
        
        Atualizar Gráfico</button>

        <div style={{ width: '50%', marginTop: '20px' }}>
          <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Resultados' } } }} />
        </div>
      </header>
    </div>
  );
}

export default App;
