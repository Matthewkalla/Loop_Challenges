//1. Print odds 1 - 20
// for(i=1; i<21; i++){
//     if(i%2 == 1){
//         console.log(i);
//     }
// }

//2. Decreasing Multiples of 3.
// for(i=100; i>-1; i--){
//     if(i%3 == 0){
//         console.log(i);
//     }
// }

//3. Print the sequence counting by 1.5
function sequence(){

    for (i=4; i>=1; i=i-1.5){
        console.log(i);
    }

    for (i=-0.5; i>=-3.5; i=i-1.5){
        console.log(i);
    }
}

//4. adds the numbers from 1 to 100 together.
function sigma(){

    var sum = 0;

    for(i=1; i<101; i++){
        sum += i;
    }

    console.log('the sum of the numbers from 1 - 100 is: ' + sum);
}

//5. Factorial: multiplies all the values from 1-12.
function factorial(){

    var product = 1;

    for(i=1; i<13; i++){
        product *= i;
    }

    console.log(product);
}


