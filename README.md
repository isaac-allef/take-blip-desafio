# Take-Blip-desafio

> Este é um repositório para resolução de um desafio técnico para a Take Blip. Trata-se do desenvolvimento de um chatbot em sua [plataforma](https://account.blip.ai/login) e o desenvolvimento de uma API para ser consumida pelo chatbot.

# :pushpin: Table of Contents

* [Features](#rocket-features)
* [Examples](#eyes-examples)
* [Installation](#construction_worker-installation)
* [Getting Started](#runner-getting-started)
* [FAQ](#postbox-faq)
* [License](#closed_book-license)

# :rocket: Features

* API: lista informações sobre os 5 repositórios de linguagem C# mais antigos da Take Blip no github em ordem crescente;
* API: permite ajustar a quantidade de repositórios buscados por requisição ao github;
* API: provê algumas imagens para serem utilizar pelo chatbot;
* Chatbot: Cumpre o fluxo conversacional do desafio.

# :eyes: Examples

Abaixo, exemplos das chamadas feitas a API:
```
GET /fiveOlderCSharpRepos
```
Parâmetros
|       Name       |      Type        |        In        |  Default Value   |                               Description                             |
|:-----------------|:-----------------|:-----------------|:-----------------|:----------------------------------------------------------------------|
| search_page_size | integer          | query            | 20               | Ajusta a quantidade de repositórios buscados por requisição ao github |

O código HTTP de retorno é 200 e o corpo da resposta é:
```
{
  "one": {
    "id": "some id",
    "name": "some name",
    ...
  },
  "two": {
    "id": "some id",
    "name": "some name",
    ...
  },
  "three": {
    "id": "some id",
    "name": "some name",
    ...
  },
  "four": {
    "id": "some id",
    "name": "some name",
    ...
  },
  "five": {
    "id": "some id",
    "name": "some name",
    ...
  }
}
```
Se os parâmetros da requisição estiverem errados será retornado um erro com status 400 e uma mensagem informando qual o tipo de erro. Caso aja algum erro interno será retornado um erro com status 500.

# :construction_worker: Installation

**É preciso ter instalado o [Node.js](https://nodejs.org/en/download/) e o [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/), então, para clonar o projeto via HTTPS e instalar suas dependências, execute estes comandos:**

```bash
# Clone este repositório
$ git clone https://github.com/isaac-allef/take-blip-desafio.git

# Entre na pasta do projeto
$ cd take-blip-desafio

# Instale as dependências
$ yarn install
```

# :runner: Getting Started

Para executar a API, rode o seguinte comando para iniciar esta API:

```bash
$ yarn start
```

Para rodar os testes unitários, utilize o seguinte comando:

```bash
$ yarn test
```

Na pasta ```Flow``` deste repositório está o arquivo ```mybotflow.json``` que contém as informações do chatbot desenvolvido, o mesmo pode ser importado para a [plataforma](https://account.blip.ai/login) da Take Blip.

# :postbox: Faq

**Question:** What are the tecnologies used in this project?

**Answer:** The tecnologies used in this project are [NodeJS](https://nodejs.org/en/), [Express Framework](http://expressjs.com/en/), [Axios](https://github.com/axios/axios) and [Jest](https://jestjs.io/).

# :closed_book: License
## :memo: License
This project is under the MIT license. See the [LICENSE](LICENSE) for more information.

---

Made with ♥ by Isaac Allef :wave:
