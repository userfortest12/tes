function test(a, b) {
    return a - b
 }
 
 var sortNumbers = [-1, 3, -5, 0, 2, 20, 11, 100];
 
 var see = sortNumbers.sort(test)
 
 console.log(see)