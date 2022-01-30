let num1, num2; //Como as variáveis são de escopo global, não é necessário repassá-las às funções a cada iteração
let exit = false;

let number={
    getValues: function(){ //Define os valores para num1 e num2
        num1 = undefined;
        num2 = undefined;

        while(isNaN(num1)){num1 = Number(prompt("digite o primeiro valor: "))}
        while(isNaN(num2)){num2 = Number(prompt("digite o segundo valor: "))}
        number.compareValues()
    },

    compareValues: function(){ //Compara se os valores são iguais
        num1==num2 ? alert(`Os números são iguais: ${num1}`) : alert(`Os números são diferentes: ${num1} != ${num2}`);
        number.checkValues(num1, num2)
    },

    checkValues: function(){ //Checa se a soma é menor que 10, entre 10 e 20, ou maior que 20
        let sum = (num1 + num2);
        if(sum < 10){
            alert(`A soma de ambos(${sum}) é menor que 10`);
        }

        else if(sum >= 10 && sum <= 20){
            alert(`A soma de ambos(${sum}) está entre 10 e 20`);
        }

        else{
            alert(`A soma de ambos(${sum}) é maior do que 20`);
        }

        number.exit();
    },

    exit: function(){ //Decide se haverá outra iteração ou se a aplicação será finalizada
        while(exit==false){
            switch(Number(prompt("Deseja continuar a aplicação?\n1-Sim\n2-Não"))){
                case 1:
                    console.log('sim');
                    number.getValues();
                    break;

                case 2:
                    alert("Obrigado por testar a aplicação!");
                    exit=true;
                    break;
            }
        }
    }
}

number.getValues();