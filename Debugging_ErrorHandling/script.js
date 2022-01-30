const noArgumentsError = new ReferenceError("Argumento(s) da funcao ausente(s)");
const notArrayError = new TypeError("Array nao e de tipo 'object'")
const notNumberError = new TypeError("Numero não é de tipo 'number'")
const arrayRangerError = new RangeError("'array' com extensao diferente do 'number'")

function Test(array, number){
    if(array == undefined || number == undefined){
        throw noArgumentsError;
    }
    if(typeof(array) != "object"){
        throw notArrayError;
    }

    if(typeof(number) != "number"){
        throw notNumberError;
    }

    if(array.length != number){
        throw arrayRangerError;
    }

    console.log("Nenhum erro foi alcancado");
}

function ErrorHandler(){
    try{
        Test([3,3], 2); //alterar estes valores para alcançar os erros
    }
    catch(e){
        if(e instanceof ReferenceError){
            throw (`Erro de Referencia:\n${e.message}`);
        }

        if(e instanceof TypeError){
            throw (`Erro de Tipo:\n${e.message}`);
        }

        if(e instanceof RangeError){
            throw (`Erro de Extensão:\n${e.message}`);
        }
    }

    finally{
        console.log("Fim do algoritmo");
    }
}
ErrorHandler();