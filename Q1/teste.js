let variavel = true
const arr = [1,2,3,4,5,6]

while(variavel){
    for(let i = 1; i <= arr.length + 1; i++)
        if(arr.length === 100){
            variavel = false
            break
        }
        if(!arr.includes(i)){
            variavel = false
            console.log(i)
        } 
}

