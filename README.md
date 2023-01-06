# Motors Shop

## Sobre o projeto

Motors Shop é uma aplicação de venda de veículos,
nela o usuário pode navegar pelos anúncios e caso algo chame a atenção poderá ver os detalhes dos produtos. Caso o usuário queira comprar o veículo ou deixar um comentário ele precissará entrar em sua conta.

<br />

Existem 3 tipos de usuários possíveis:

### **_Visitantes_**

Esse tipo de usuário não precisa se cadastrar e nem de autentificação para navegar por certas partes da aplicação, ele pode navegar pelos anúncios e ver suas informações, bem como seu preço, descrição, comentarios e outros detalhes.

<br />

### **_Usuário Comprador_**

Esse tipo de usuário precisa se cadastrar e fazer login para se diferenciar do `Visitante`, ele é capaz de deixar comentários nos produtos e fazer a compra do mesmo. Um menu fica visivel para ele, para poder editar seus dados e também se desconectar.

<br />

### **_Usuário Vendedor_**

Por ultimo temos o usuário vendedor, e ele precisa se cadastrar e fazer login, ele pode criar anúncios com o veículo que pretende vender, e administrá-los. Além de todas as funcionalidades que um `Comprador` tem acesso, o menu dele ganha um adicional de `Meus anúncios`, onde ele é capaz de ir para sua pagina pessoal para editar e/ou deletar seus anúncios.

<br />

## Iniciando a aplicação

Faça o clone em sua maquina do repositório, tanto o Front, quanto o Back ([Motors Shop Back-end](https://github.com/Motors-shop/motors-shop-backend))

Veja no back-end como inicia-lo para essa aplicação utilizar o banco de dados.

**_Importante:_** Não mude as portas do projeto, e lembre-se de verificar se as mesma estão disponiveis.

<br/>

No diretório do projeto, use o comando no terminal:

```bash
yarn ou yarn install
```

Para baixar as dependências, em seguida use:

```bash
yarn start
```

Para executar o aplicativo no modo de desenvolvimento.

Abra [http://localhost:3000](http://localhost:3000) para visualizá-lo no navegador.

Para para a execução precione `Ctrl + c` no terminal.
