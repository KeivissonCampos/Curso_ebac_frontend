# Sistema de Contas Bancárias

Este repositório contém uma implementação de um sistema básico de contas bancárias em JavaScript, que permite a criação de contas de diferentes tipos: Conta Básica, Conta Intermediária e Conta VIP. Cada tipo de conta possui uma taxa de saque específica, simulando as vantagens e limitações de cada categoria.

## Funcionalidades Principais

1. **Criação de Contas**: É possível criar contas de três tipos, cada uma com uma taxa de saque própria:
   - Conta Básica: taxa de 10%.
   - Conta Intermediária: taxa de 5%.
   - Conta VIP: taxa de 0%.

2. **Depósito**: Adiciona valores ao saldo de uma conta. Apenas valores numéricos positivos são aceitos.

3. **Consulta de Saldo**: Exibe o saldo atual da conta.

4. **Saque com Taxa**: Permite saques considerando a taxa específica de cada conta.

## Estrutura do Código

### Classe Principal `Conta`

A função `Conta` serve como uma classe base para criar uma conta genérica com os métodos:
- `getSaldo`: Retorna o saldo atual.
- `setSaldo`: Adiciona valor ao saldo.
- `sacarDaConta`: Realiza o saque com a aplicação de uma taxa.

### Contas Derivadas

As classes `ContaBasica`, `ContaIntermediaria` e `ContaVip` herdam de `Conta`, cada uma com sua taxa de saque.

- **ContaBasica**: Aplica uma taxa de 10% no saque.
- **ContaIntermediaria**: Aplica uma taxa de 3% no saque.
- **ContaVip**: Não aplica taxa no saque.

Cada classe possui o método `sacar`, que chama `sacarDaConta` com a taxa específica de cada conta.

## Exemplo de Uso

O código exemplifica o uso com três contas:
- `Keivisson` é uma instância de `ContaBasica`.
- `Ana` é uma instância de `ContaIntermediaria`.
- `Pedro` é uma instância de `ContaVip`.

### Exemplo de Interação

    ```javascript
    const Keivisson = new ContaBasica(1001);
    const Ana = new ContaIntermediaria(1002);
    const Pedro = new ContaVip(1003);

    console.log('****Conta Básica****');
    Keivisson.getSaldo();      // Exibe saldo inicial
    Keivisson.setSaldo(30);    // Adiciona saldo
    Keivisson.setSaldo(300);   // Adiciona saldo
    Keivisson.sacar(105);      // Realiza saque com taxa de 10%

    console.log('****Conta Intermediária****');
    Ana.getSaldo();            // Exibe saldo inicial
    Ana.setSaldo(30);          // Adiciona saldo
    Ana.setSaldo(300);         // Adiciona saldo
    Ana.sacar(105);            // Realiza saque com taxa de 3%

    console.log('****Conta VIP****');
    Pedro.getSaldo();          // Exibe saldo inicial
    Pedro.setSaldo(30);        // Adiciona saldo
    Pedro.setSaldo(300);       // Adiciona saldo
    Pedro.sacar(105);          // Realiza saque sem taxa

### Resultado
    ```javascript
    ****Conta Básica****
    Saldo atual: R$0
    Depositado: R$30. Saldo atual: R$30
    Depositado: R$300. Saldo atual: R$330
    Sacado: R$105 com taxa de 10%. Saldo atual: R$214.5

    ****Conta Intermediária****
    Saldo atual: R$0
    Depositado: R$30. Saldo atual: R$30
    Depositado: R$300. Saldo atual: R$330
    Sacado: R$105 com taxa de 3%. Saldo atual: R$221.85

    ****Conta VIP****
    Saldo atual: R$0
    Depositado: R$30. Saldo atual: R$30
    Depositado: R$300. Saldo atual: R$330
    Sacado: R$105 com taxa de 0%. Saldo atual: R$225

## Branch do Exercício

Este código deve ser armazenado em uma branch separada chamada oo_js para organização e versionamento do exercício.

## Instalação e Execução

Para testar o código:

1. Copie o código em um editor de texto com suporte a JavaScript.
2. Execute-o em um ambiente Node.js ou diretamente no console do navegador para ver os resultados.