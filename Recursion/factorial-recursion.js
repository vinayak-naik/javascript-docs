function factorialRecursion(num) {
    if(num > 1){
        return num*factorialRecursion(num-1)
    }
    return 1

}
    console.log(
      "factorialRecursion==========",
      factorialRecursion(8)
    );
