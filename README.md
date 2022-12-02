<h1 align="center"> Front-end OmNaNFT </h1>

## Descrição do Projeto

<p>O projeto consiste em um site desenvolvido em React voltado para o mundo de NFT, em que você pode criar, ver, comprar, vender, negociar, etc... suas NFTs</p>

<h4 align="center"> 
	:white_check_mark:  Finalizado :white_check_mark:
</h4>

## 🛠 Tecnologias

As principais tecnologias que foram usadas na construção do projeto:

- [ReactJS](https://pt-br.reactjs.org/)
- [NextJs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:

1. Frontend
2. Backend

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

## Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Docker](https://www.docker.com/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

## 🎲 Rodando o Frontend

```bash
# Clone este repositório
$ git clone <https://github.com/ItaloRez/OmNaNFT-Front.git>
$ cd OmNaNFT-Front

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

#Para executar o projeto em produção
$ npm run build

```

## 🎲 Rodando o Backend

```bash
# No mesmo repositório do Frontend, abra outro terminal e execute os seguintes comandos:
# Com o Docker aberto, execute o comando abaixo para subir o container do banco de dados e o container do backend
$ docker-compose up -d
```

## Estrutura de pastas

```bash
├───public                 # Arquivos estáticos
├───cypress
│   ├───e2e                # Arquivos de teste do cypress
├───src                    # Pasta principal do projeto
│   ├───assets             # Pasta de assets
│   ├───components         # Pasta de componentes
│   ├───contexts           # Pasta de contextos que disponibilizam dados para toda a aplicação
│   ├───pages              # Pasta de páginas, cada página é uma rota da aplicação(Exemplo: https://nextjs.org/docs/basic-features/pages)
│   │   └───collection
│   ├───providers          # Pasta para organizar os providers de contextos
│   ├───tests              # Pasta de arquivos de teste unitário com jest
│   └───services           # Pasta de serviços de conexão com o api do backend
├───styles                 # Pasta de estilos
├───.eslintrc.json         # Configuração do eslint
├── .gitignore             # Arquivo de configuração do git (https://git-scm.com/docs/gitignore)
├── README.md              # Arquivo de descrição do projeto
├── next.config.js         # Arquivo de configuração do next
├── package.json           # Arquivo de configuração do npm
├── postcss.config.js      # Arquivo de configuração do postcss
├── tailwind.config.js     # Arquivo de configuração do tailwind
├── tsconfig.json          # Arquivo de configuração do typescript
└── yarn.lock              # Arquivo de configuração do yarn
```

## Features

** Usuário **

- [x] Login
- [x] Cadastro
- [x] Ver perfil
- [x] Adicionar Saldo
- [x] Logout
- [x] Refresh Token

** NFT **

- [x] Criar NFT
- [x] Ver NFT
- [x] Comprar NFT
- [x] Vender NFT
- [x] Alterar preço de venda
- [x] Criar coleção de NFTs
- [x] Ver coleção de NFTs

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

## 👥 Autores

<table  style="text-align:center; border: none" >
<tr>

<td align="center"> 
<a href="https://github.com/itmoura" style="text-align:center;">
<img style="border-radius: 20%;" src="https://github.com/itmoura.png" width="120px;" alt="autor"/><br> <strong> Ítalo Moura </strong>
</a>
</td>

<td align="center"> 
<a href="https://github.com/ItaloRez" styles="text-align:center;">
<img style="border-radius: 20%;" src="https://github.com/ItaloRez.png" width="120px;" alt="autor"/><br><strong> Ítalo de Rezende </strong>
</a>
</td>

</tr>
</table>

## Atribuição dos vetores utilizados projeto

<a href="https://www.flaticon.com/br/icones-gratis/nft" title="nft ícones">Nft ícones criados por Vector Squad - Flaticon</a>
