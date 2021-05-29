
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

const form=document.querySelector('#loginform');

const login=async(e)=>{
    
    e.preventDefault();
    let uri =" http://localhost:3030/users";

        var res = await fetch(uri);
        var data =await res.json();
        var data1=data;
        console.log(data1);
      
      
        var inputemail = document.loginform.inputEmail.value;
        var inputPassword = document.loginform.inputPassword.value;
        
   // console.log(inputemail);
var sucess=false;
    for (var i = 0, len = data1.length; i < len; i++) {
        //alert("for");
                    var udata = data1[i];
                    if (udata.email == inputemail) {
                        printError("userErr","");
                            if(udata.password == inputPassword)
                            {
                                sucess=true;
                            //window.location.replace('../html/HomeP.html');
                            break;
                            }
                            else
                            {
                                printError("userErr","");
                                printError("passErr", "Wrong password!!");
                                break;
                            }
                    }
                    else
                        {
                           
                            printError("userErr", "User not found !!");
                           
                        }
                  }
//    window.location.replace('../html/HomeP.html');
if(sucess==true)
{
   
    sessionStorage.setItem('user', inputemail);
   
    window.location.replace('../html/HomeP.html');
   
    // alert(sessionStorage.getItem('user'));
    // console.log(localStorage.getItem('user'));
    // document.getElementById('login').onclick = function() {
    //     document.getElementById('login').innerHTML = "logout";
    // }
    const disable = document.querySelector('.disabled');
        disable.href = "";
        // if(isset($_SESSION['logged_in'])){
        //     //your logout link
        //     }else{
        //     //your login link
        //     }

}

}
window.addEventListener("submit",login)




























// const login = async() =>
// {
   
//     let uri =" http://localhost:3000/login"

//     const res = await fetch(uri);
//     const data =await res.json();
//     console.log(data);
//    return data;
//    // alert(data[0].email);   
//     // exports.findByUsername = function(username, cb) {
//     //     process.nextTick(function() {
//     //       for (var i = 0, len = records.length; i < len; i++) {
//     //         var record = records[i];
//     //         if (record.username === username) {
//     //           return cb(null, record);
//     //         }
//     //       }
//     //       return cb(null, null);
//     //     });
//     //   }
// }
// // window.addEventListener('DOMContentLoaded' ,() => login());

// function logincheck(){
//     var email = document.loginform.inputEmail.value;
//     var inputPassword = document.loginform.inputPassword.value;
//     alert(email);
//     // let uri =" http://localhost:3000/login"

//     // const res =  fetch(uri);
//     // const data = res.json();
//     // console.log(data);
    
// }
