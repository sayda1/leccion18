function stringMultiplicar(n) {
    var resultado;
    var salida="";
    for(var i=1;i<=10;i++){
        resultado=n*i;
        salida+=n+"x"+i+"="+resultado;
        if((i+1)<=10){
            salida+="/"
        }
        
    }
    return salida;
}
