//write your code here
function stripUpperCase(string){
    let stripped = ""
    for(let i of string){
        if(i === i.toLowerCase()){
            stripped += i;
        }
    }return stripped;
}

console.log(stripUpperCase("Hello!"))