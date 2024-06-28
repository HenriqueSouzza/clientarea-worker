# About project

É um projeto de duas aplicações distintas sendo     gerenciada por um worker (cloudflare). Criei um build de determinado projeto existente e criei um outro pra adicionar regras de apresentação para os usuário final.

A regra implementada é:

- Quando o usuário acessar a rota /dominio ou /email-list o cloudflare apresentará um app, quando ele acessar qualquer outra rota que não seja essas citadas, ele apresentará outro app.


# Requirements

- Node 16
- Yarn
- Account Cloudflare

# Setup

Instale as dependências:

```bash
yarn install
```

Sobe os depois app:

```bash
yarn run-clientarea
yarn run-domains
```

Certifique-se se os links estejam funcionando

```bash
http://localhost:3000
http://localhost:3001
```

Agora o mais importante para a mágica acontecer, execute:

```bash
yarn worker
```

Acesse [http://localhost:5100](http://localhost:5100). Como o objetivo era rodar o clientarea o host deverá ser igual ao de desenvolvimento local. Então,
acesse [http://cliente.whmcs.brasil:5100](http://cliente.whmcs.brasil:5100)
