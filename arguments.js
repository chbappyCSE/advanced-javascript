function add(num1, num2){
    console.log([...arguments]);
    return num1, num2, + arguments[2];
}
const result = add(2,3,5,7);
console.log(result);


/* 
add(5,6,7,8,9,5,4,5,7);
function add(){
    let total = 0;
    for(i = 0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

function add(...a){
    let total = 0;
    for(i = 0; i<a.length; i++){
        total += a[i];
    }
    return total;
}

console.log(add(5,5,4,78,8,4,5,4)); */