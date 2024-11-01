function Conta(numero) {
    this.numero = numero;
    let _saldo = 0;

    this.getSaldo = function() {
        console.log(`Saldo atual: R$${_saldo}`);
        return _saldo;
    };

    this.setSaldo = function(valor) {
        if (typeof valor === 'number' && valor > 0) {
            _saldo += valor;
            console.log(`Depositado: R$${valor}. Saldo atual: R$${_saldo}`);
        }
    };

    this.sacarDaConta = function(valor, taxa) {
        const valorComTaxa = valor + (valor * taxa);
        if (typeof valor === 'number' && valor > 0 && valorComTaxa <= _saldo) {
            _saldo -= valorComTaxa;
            console.log(`Sacado: R$${valor} com taxa de ${taxa * 100}%. Saldo atual: R$${_saldo}`);
        } else {
            console.log("Saldo insuficiente para o saque com taxa.");
        }
    };
}

// Conta Basica - Taxa de 10% no saque
function ContaBasica(numero, saldoInicial) {
    Conta.call(this, numero, saldoInicial);
    this.taxa = 0.10;

    this.sacar = function(valor) {
        this.sacarDaConta(valor, this.taxa);
    };
}

// Conta Intermediaria - Taxa de 5% no saque
function ContaIntermediaria(numero, saldoInicial) {
    Conta.call(this, numero, saldoInicial);
    this.taxa = 0.03;

    this.sacar = function(valor) {
        this.sacarDaConta(valor, this.taxa);
    };
}

// Conta Vip - Taxa de 0% no saque
function ContaVip(numero, saldoInicial) {
    Conta.call(this, numero, saldoInicial);
    this.taxa = 0;

    this.sacar = function(valor) {
        this.sacarDaConta(valor, this.taxa);
    };
}

const Keivisson = new ContaBasica(1001);
const Ana = new ContaIntermediaria(1002);
const Pedro = new ContaVip(1003)


console.log('****Conta Básica****');
Keivisson.getSaldo();
Keivisson.setSaldo(30);
Keivisson.setSaldo(300);
Keivisson.sacar(105);

console.log('');

console.log('****Conta Intermediária****');
Ana.getSaldo();
Ana.setSaldo(30);
Ana.setSaldo(300);
Ana.sacar(105);

console.log('');

console.log('****Conta VIP****');
Ana.getSaldo();
Pedro.setSaldo(30);
Pedro.setSaldo(300);
Pedro.sacar(105);