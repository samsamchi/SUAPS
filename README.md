# SUAPS - Sistema Único de Atenção Psicossocial

Repositório do projeto **SUAPS (Sistema Único de Atenção Psicossocial)**, desenvolvido utilizando  **React** e  **React Native** para oferecer uma interface intuitiva e responsiva que facilita o gerenciamento e o acompanhamento de serviços da área da saúde mental.

## Visão Geral

O **SUAPS** é uma sistema desenvolvido para gerenciar e monitorar os serviços prestados pelos CAPS em Alagoas. Ele oferece funcionalidades para filtrar dados por cidade, tipo de serviço, período e status, além de exibir gráficos e relatórios de desempenho em tempo real.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`

Inicia a aplicação em modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página será recarregada automaticamente quando você fizer alterações no código.\
Você também poderá ver erros de lint no console.

### `npm test`

Inicia o modo de testes interativos.\
Consulte a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais detalhes.

### `npm run build`

Cria o build da aplicação para produção na pasta `build`.\
Agrupa corretamente o React no modo de produção e otimiza a construção para o melhor desempenho.

O build é minificado e os arquivos incluem hashes.\
Sua aplicação está pronta para ser implantada!

Veja a seção sobre [deploy](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `npm run eject`

**Nota: Esta é uma operação irreversível. Uma vez que você executar o `eject`, não poderá voltar atrás!**

Se você não estiver satisfeito com as configurações de build e as ferramentas de configuração, você pode `eject` a qualquer momento. Este comando removerá a dependência única de build do projeto.

Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) diretamente no seu projeto para que você tenha controle total sobre eles. Nesse ponto, todos os comandos continuarão funcionando, mas apontarão para os scripts copiados para que você possa ajustá-los.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicações móveis.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Chart.js e React-Chartjs-2**: Bibliotecas para exibir gráficos de barras que mostram a quantidade de serviços aprovados e apresentados.

## Funcionalidades

- **Filtro por Cidades**: Exibe opções das cidades de Alagoas.
- **Filtro por Serviços**: Exibe os serviços prestados.
- **Filtro por Status e Período**: Filtra os dados com base no status de aprovação e no período selecionado.
- **Gráficos em Tempo Real**: Exibe gráficos de barras mostrando comparações entre serviços aprovados e apresentados.
- **Interface Responsiva**: Adaptável para dispositivos móveis usando React Native.

## Configuração e Execução

### 1. Clonar o repositório
```bash
git clone https://github.com/samsamchi/SUAPS.git
