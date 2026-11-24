import read from "readline"
const rl=read.createInterface({input:process.stdin,output:process.stdout});
rl.question("enter the name: ",(name)=>{
    console.log("Name is:",name);
    rl.question("enter first number: ",(number1)=>{
        console.log(number1);
        rl.question("enter second number: ",(number2)=>{
            console.log(number2);
            const sum=Number(number1)+Number(number2);
            console.log("Sum is",sum);
        rl.close() ;    
        })
        
    })
   
})