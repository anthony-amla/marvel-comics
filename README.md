# Desafio em ReactJS: Consulta de quadrinhos da Marvel

Descrição do Projeto
Crie uma Single Page Application para uma consulta de quadrinhos utilizando a API da Marvel para todos os consumos de dados.

API: https://developer.marvel.com
Documentação: https://developer.marvel.com/docs

A aplicação consiste em uma tela de lista de quadrinhos, um modal de detalhe do quadrinho (comics) e o envio dos quadrinhos para um endereço selecionado no mapa, para isso utilizei a API do Google Maps.

## Planejamento

### 1. Entendimento do projeto:
- Antes de começar a escrever o código, é importante entender o que o projeto exige. Leia cuidadosamente o enunciado do desafio, a documentação da API da Marvel e o Google Maps API. Certifique-se de entender os requisitos e as funcionalidades que precisam ser implementadas.

### 2. Estruturação do projeto:
- Após entender as necessidades do projeto, crie a estrutura de diretórios e arquivos para o projeto. Geralmente, em projetos ReactJS, a estrutura pode incluir pastas como "src" (contendo o código-fonte do projeto), "public" (contendo arquivos estáticos como imagens e ícones) e "components" (contendo os componentes reutilizáveis).

### 3. Configuração do ambiente de desenvolvimento:
- Configure o ambiente de desenvolvimento. Verifique se todas as dependências necessárias estão instaladas, como o ReactJS, as bibliotecas para manipulação de rotas e a API do Google Maps.

### 4. Criação dos componentes:
- Crie os componentes para a tela de lista de quadrinhos e o modal de detalhe do quadrinho. Certifique-se de que os componentes estejam modulares e reutilizáveis.
- Utilizando a API da Marvel, implemente a funcionalidade de listar os quadrinhos. Utilize a biblioteca de rotas para direcionar o usuário para o modal de detalhe do quadrinho ao clicar em um quadrinho específico na lista.
- Ao clicar em um quadrinho específico na lista de quadrinhos, um modal de detalhe do quadrinho deve ser aberto. Utilize a API da Marvel para obter mais informações sobre o quadrinho selecionado. O modal deve exibir as informações detalhadas do quadrinho.
- Utilize a API do Google Maps para permitir que o usuário selecione um endereço no mapa. Após o endereço ser selecionado, implemente a funcionalidade de enviar os quadrinhos selecionados para o endereço selecionado (informado por uma notificação).

### 4. Criações adicionais:
 - Sistema de busca por nome.
 - Sistema de ordenamento por 'All', 'Title' ou 'Year'.
 - Sistema de noticiações padrão (Toast Notifications).

### 5. Homologação:
- Criar documentação
## Installation

### 1. Install

```bash
    npm install
```
### 2. Run

```bash
    npm start
```
## Features usadas

- HTML
- CSS
- JavaScript
- ReactJS
- Axios
- Google API
## Objetivo [Concluído]

### Comentário:
Foi criado uma aplicação como foi requisitado para uma entrevista de emprego, a cronometragem do tempo realizado foi de 48 Horas em média.