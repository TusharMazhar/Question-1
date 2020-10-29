function customPrint(n, message) {
    if(n===0){
        return n;
    }else{
        console.log(message)
        return customPrint(n-1,message)
    }
}
customPrint(5, "Hello, World!");