//Alcance de var, ley y const

function suma(parametroUno, parametroDos){
    var x=10;
    if (parametroUno> parametroDos){
        var x = 20
    }
    return parametroUno + parametroDos + x ;
}

suma(5,6);
