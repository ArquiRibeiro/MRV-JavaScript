class ContaBancaria{
    constructor(agencia = 1, numero = 0, tipo = "bancaria", _saldo = 800){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = _saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        let insufficientBalanceError = new Error("Saldo Insuficiente");
        try{
            if(valor > this._saldo){
                throw insufficientBalanceError
            }

            this._saldo = this._saldo - valor;
            return this._saldo
        }

        catch(e){
            throw error
        }
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero, tipo, _saldo = 200){
        super(agencia, numero, tipo, _saldo);
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, tipo, _saldo = 800){
        super(agencia, numero, tipo, _saldo);
        this.tipo = "poupanca"
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, tipo, _saldo = 200){
        super(agencia, numero, tipo, _saldo);
        this.tipo = "universitaria";
    }

    sacar(valor){
        let insufficientBalanceError = new Error("Saldo Insuficiente");
        let amountError = new Error("Saques apenas de até 500 reais");
        try{
            if(valor > this._saldo){
                throw insufficientBalanceError
            }

            else if(valor > 500){
                throw amountError
            }

            else{
                this._saldo = this._saldo - valor;
                return this._saldo
            }
        }

        catch(e){
            throw e
        }
    }
}

function NovaConta(){
    let nome = ""
    let tipo = "";
    let tiposDeConta = ["Bancaria", "Poupanca", "Corrente", "Universitaria"];
    let numeroConta = "";
    let numerosUsados = [];

    while(nome.length <= 2){
    let error = new Error("Minimo de 3(tres) caracteres!");
        nome = prompt(`Bem vindo. Por favor, digite seu nome`);
        nome = nome[0].toUpperCase() + nome.substring(1);
        if(nome.length <= 2){
            alert(error);
        }
    }

    while(!tiposDeConta.includes(tipo)){
        let error = new Error("Tipo de conta não reconhecida!");

        tipo=prompt(`Obrigado ${nome}. Agora digite o tipo de conta que deseja criar: ${tiposDeConta}`);
        tipo = tipo[0].toUpperCase() + tipo.substring(1);
        if(!tiposDeConta.includes(tipo)){
            alert(error);
        }
    }

    do{
        numeroConta = Number(prompt("Estamos quase lá. Agora por favor, digite um número para sua conta"));
        (Math.floor(Math.random() * 5) + 1) == 5 ? "" : numerosUsados.push(numeroConta);
        console.log(numerosUsados);
    } while(numerosUsados.includes(numeroConta));

    switch(tipo){
        case "Bancaria":
            contas[nome] = new ContaBancaria(undefined, numeroConta, tipo);
            break
        case "Poupanca":
            contas[nome] = new ContaPoupanca(undefined, numeroConta, tipo);
            break
        case "Corrente":
            contas[nome] = new ContaCorrente(undefined, numeroConta, tipo);
            break
        case "Universitaria":
        contas[nome] = new ContaUniversitaria(undefined, numeroConta, tipo);
        break
    }

    alert(`Muito obrigado ${nome}, sua conta ${tipo} de numero ${numeroConta} foi devidamente criada!`);
    return
}

function ListarContas(conta){
    let lenght = Object.keys(contas["leo"]).length;
    let i = 0;
    let string = "";
    for(i=0; i<lenght; i++){
        string = string + Object.keys(contas[conta])[i] + ": " + Object.values(contas[conta])[i] + "\n";
    }
    string = string.replace(/_/g, "")
    alert(string);
}

function Main(){
    let exit = false;
    while(exit==false){
        switch(prompt("O que deseja fazer? (digite o comando entre parenteses)\n(Nova) conta\n(Listar) contas existentes\n(Sair)")){
            case "Nova":
            case "nova":
                NovaConta();
                break;

            case "Listar":
            case "listar":
                let conta = "";
                conta = prompt("Qual destas deseja ver mais detalhes?: " + Object.keys(contas));
                ListarContas(conta);
                break

            case "Sair":
            case "sair":
                exit = true;
                break

            default:
                alert("Comando não entendido. Por favor, verifique a digitacao");
                break
        }
    }
}

contas={
    leo: new ContaBancaria()
};
Main();