// let a = 10;
// let b = 20;

// console.log(a + b);

function login (msg,error)
{
    if (error){
        console.log("Error is "+error);

    }
    else{
        console.log("Welcome"+msg);
    }
}
function loginVerification(username,password,clbk){
if (username =="ptomer40" && password=="123456"){
    clbk ("Success",null);
}else{
    clbk (null,"username or password is incorrect");

}}
loginVerification("ptomer40","123456",login);