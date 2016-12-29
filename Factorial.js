function factorial(n) {
    if(n>0){
        var factorial=1;
        for (i=1; n>=i; i++){
            factorial=factorial*i;
        }
        return factorial;
    }else{
        return null;
    }

}
