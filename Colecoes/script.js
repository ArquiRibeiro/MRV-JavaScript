function filterMap(map){
    filterUser="";
    filterArray = [];
    while(filterUser != "user" && filterUser!= "admin"){
        filterUser = prompt("Digite o tipo que deseja filtrar da lista aleatória (admin ou user): " + nomes);
    }
    for ([key, value] of usuarios){
        value==filterUser ? filterArray.push(key) : "";
    }

    alert("Usuários de tipo " + filterUser.toUpperCase() + ": " + filterArray);
}

const usuarios = new Map();

nomes=["\nJoao","\nAdrielly","\nMarcos", "\nAna Clara", "\nMike", "\nJonas", "\nJefferson"];

for(i=0; i<nomes.length; i++){
    switch(Math.floor(Math.random() * 2) + 1){
        case 1:
            classificacao="admin";
            break
        case 2:
            classificacao="user";
            break
    }
    usuarios.set(nomes[i], classificacao)
}

filterMap()