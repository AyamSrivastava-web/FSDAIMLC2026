// let a = 10;
// let b = 20;

// console.log(a + b);

// function login (msg,error)
// {
//     if (error){
//         console.log("Error is "+error);

//     }
//     else{
//         console.log("Welcome"+msg);
//     }
// }
// function loginVerification(username,password,clbk){
// if (username =="ptomer40" && password=="123456"){
//     clbk ("Success",null);
// }else{
//     clbk (null,"username or password is incorrect");

// }}
// loginVerification("ptomer40","123456",login);
// console.log("first")
// // setTimeout(()=>(console.log("second")),1000) //it gives time gives others chance to execute first
// for(i=1;i<10000;i++){
//     console.log("second")
// }
// console.log("third")
// setTimeout(() => {
//     console.log("1")
//     setTimeout(()=>{console.log("2")
//         setTimeout(() => {console.log("3")
//             setTimeout(() => {console.log("4")
//                 setTimeout(() => {console.log("5")
//                     setTimeout(() => {console.log("6")
//                         setTimeout(() => {console.log("7")
//                             setTimeout(() => {console.log("8")
                                
//                             }, 1000);
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     },1000);
// }, 1000);

//promises
const myPromise=new Promise((resolve, reject) => {
    username="ptomer40"
    password="1234"
    if(username=="ptomer" && password=="1234"){
        resolve("sucess")
    }
    else{
        resolve("username or password is incorrect")
    }
})

myPromise.then((msg)=>{
    console.log(msg)
}).catch((msg)=>{
    console.log(msg)
}).finally(()=>{
    console.log("all thr resouses have been closed /memory released")
})
async function handlelogin(){
    try{
        await myPromise}
        catch(e){
            console.log(e)
        }
        finally{
            console.log("all thr resouses have been closed /memory released")
        }
    }
    
