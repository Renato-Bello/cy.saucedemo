# 💻 Projeto de Automação de Testes E2E - Sauce Demo

Este repositório contém a automação de testes de ponta a ponta (E2E) para o sistema **Sauce demo**, utilizando a ferramenta [Cypress](https://www.cypress.io/).

![Em Desenvolvimento](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)

## 📋 Descrição

O objetivo deste projeto é garantir a qualidade de algumas das funcionalidades do sistema, tais como login, ordenação de produtos, carrinho de compras, e validação de mensagens de erro e sucesso.

Os testes seguem boas práticas de automação e possuem foco em:

- Verificação de fluxo de login;
- Validação de mensagens de feedback para o usuário;
- Garantia de funcionalidades essenciais do sistema.

## 🛠️ Tecnologias e Ferramentas

- **Cypress**: Framework para automação de testes de E2E;
- **JavaScript**: Linguagem utilizada nos scripts de teste;
- **Node.js**: Ambiente de execução do JavaScript;
- **Yarn**: Gerenciador de pacotes.


## 🚀 Como Executar o Projeto

###  📌Pré-requisitos

Certifique-se de ter instalado:

- Node.js (v14 ou superior);
- Yarn

### 👨🏻‍💻 Passos para Configuração

 1. Clone o repositório:
 ```bash
	git clone https://github.com/Renato-Bello/cy.e2eburguer.git
```
 2. Entrar na pasta do projeto clonado:
 ```bash
	cd cy-e2eburger
```
3. Instale as dependências:
 ```bash
	yarn install
```

### 🤖 Executar os Testes:

-  Para abrir o painel interativo do Cypress:
 ```bash
	yarn cypress open
```

-  Para executar os testes no modo headless:
 ```bash
	yarn cypress run
```


## 🧪 Testes Implementados

### Testes de Login

-   **Login de usuário realizado com sucesso**:
	-  Preenche os dados de login válidos.
	-  Garante que o usuário foi redirecionado corretamente.

	**Não deve logar quando username estiver inválido**:    
	-  Tenta logar com username incorreto e valida a mensagem de erro exibida.

	**Não deve logar quando username estiver em branco**:    
	-  Tenta logar com username em branco e valida a mensagem de erro exibida.
        
-   **Não deve logar quando senha inválida**:    
	-  Tenta logar com senha incorreta e valida a mensagem de erro exibida.

	**Não deve logar quando senha estiver em branco**:    
	-  Tenta logar com senha em branco e valida a mensagem de erro exibida.
      
-   **Não deve logar quando todos os dados estiverem em branco**:
	 - Tenta logar sem preecnher credenciais e valida a mensagem obrigatóriedade dos campos.

 ### Testes de ordenação de produtos

-   **Valida ordenação por nome A-Z**:
	-  Seleciona categoria de A-Z.
	-  Garante que os produtos estão ordenados corretamente.

	**Valida ordenação por nome Z-A**:    
	-  Seleciona categoria de Z-A.
  -  Garante que os produtos estão ordenados corretamente.
        
-   **Valida ordenação por preço do menor para o maior**:    
  -  Seleciona categoria de preços do menor para o maior.
  -  Garante que os produtos estão ordenados corretamente.
      
-   **Valida ordenação por preço do maior para o menor**:
	-  Seleciona categoria de preços do maior para o menor.
  - Garante que os produtos estão ordenados corretamente.



    
      ### Demonstração
    - [Testes de Login](https://github.com/user-attachments/assets/a3babf91-5576-410a-83aa-d5597924ff02)
    - [Testes de ordenação](https://github.com/user-attachments/assets/bb0e9d11-d273-4083-bb51-d4c564f80680)
    - [Testes de validação de itens no carrinho](https://github.com/user-attachments/assets/5e23fda2-f3df-4017-ab46-cf3ccb933f9a)
    
    
    

## 📦 Dependências Principais

As principais dependências do projeto são:

-   [Cypress](https://www.cypress.io/): Framework de testes.
-   [Yarn](https://yarnpkg.com/): Gerenciador de pacotes.



##  📂 Estrutura do Projeto

A organização do projeto segue a estrutura padrão recomendada pelo Cypress:

 ```bash
cy-e2eburguer/
├── cypress/
│   ├── e2e/                   # Arquivos de testes E2E
│   ├── fixtures/              # Arquivos de dados fictícios (fixtures)
│   ├── support/               # Comandos personalizados e configurações adicionais
├── cypress.config.js          # Arquivo de configuração do Cypress
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto

	
```



##  🚀 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## 📌 Notas Gerais
Feito por [Renato Bello](https://github.com/Renato-Bello)
