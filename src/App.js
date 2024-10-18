import React, { useState } from 'react';  
import logo from './logo_nees.png';
import './App.css';
import { Bar } from 'react-chartjs-2'; 
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title);

function App() {
  // Estados para armazenar as seleções
  const [cidade, setCidade] = useState('');
  const [servico, setServico] = useState('');
  const [statusSelecionado, setStatus] = useState(''); 
  const [periodo, setPeriodo] = useState('');
  const [ano, setAno] = useState('');
  const [numero, setNumero] = useState(null);

  // Contadores para os resultados
  const [qtdAprovados, setQtdAprovados] = useState(0);
  const [qtdApresentados, setQtdApresentados] = useState(0);

  // Listas de opções
  const cidadesAlagoas = ['Maceió', 'Arapiraca', 'Rio Largo', 'Satuba', 'Pilar'];
  const servicos = ['Acolhimento', 'Oficina', 'Intervenção', 'Atividade Educativa', 'Terapia'];
  const statusOptions = ['Aprovados', 'Apresentados']; 
  const periodos = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
  const anos = ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']; 

  // Função para calcular um número (pode ser qualquer lógica)
  const calcularNumero = () => {
    if (cidade && servico && statusSelecionado && periodo && ano) {
      const resultado = 
        cidadesAlagoas.indexOf(cidade) + 
        servicos.indexOf(servico) + 
        periodos.indexOf(periodo) + 
        statusOptions.indexOf(statusSelecionado) +
        anos.indexOf(ano) + 
        1; // Adiciona 1 para evitar o resultado ser 0 se nada for selecionado
      setNumero(resultado);

      // Atualiza as quantidades de Aprovados e Apresentados
      if (statusSelecionado === 'Aprovados') {
        setQtdAprovados(qtdAprovados + 1);
      } else if (statusSelecionado === 'Apresentados') {
        setQtdApresentados(qtdApresentados + 1);
      }
    }
  };

  // Atualiza a seleção e recalcula o número
  const handleCidadeChange = (event) => {
    setCidade(event.target.value);
    calcularNumero();
  };

  const handleServicoChange = (event) => {
    setServico(event.target.value);
    calcularNumero();
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    calcularNumero();
  };

  const handlePeriodoChange = (event) => {
    setPeriodo(event.target.value);
    calcularNumero();
  };

  const handleAnoChange = (event) => {
    setAno(event.target.value);
    calcularNumero();
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
          href="https://www.nees.ufal.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sobre o NEES
        </a>

        <div className="filters">
          <select value={cidade} onChange={handleCidadeChange}>
            <option value="">Selecione uma cidade</option>
            {cidadesAlagoas.map((cidade, index) => (
              <option key={index} value={cidade}>
                {cidade}
              </option>
            ))}
          </select>

          <select value={servico} onChange={handleServicoChange}>
            <option value="">Selecione um serviço</option>
            {servicos.map((servico, index) => (
              <option key={index} value={servico}>
                {servico}
              </option>
            ))}
          </select>

          <select value={statusSelecionado} onChange={handleStatusChange}>
            <option value="">Selecione um status</option>
            {statusOptions.map((status, index) => ( 
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>

          <select value={periodo} onChange={handlePeriodoChange}>
            <option value="">Selecione um período</option>
            {periodos.map((periodo, index) => (
              <option key={index} value={periodo}>
                {periodo}
              </option>
            ))}
          </select>

          <select value={ano} onChange={handleAnoChange}>
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
            <h3>Resultado: {numero}</h3>
          </div>
        )}

        <div style={{ width: '50%', marginTop: '20px' }}>
          <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' }, title: { display: true, text: 'Resultados' } } }} />
        </div>
      </header>
    </div>
  );
}

export default App;
