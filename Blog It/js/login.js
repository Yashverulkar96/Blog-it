function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validatelogin(){

    var email = document.loginform.inputEmail.value;
    var inputPassword = document.loginform.inputPassword.value;
    var userErr = passErr= true;
    if(email == "") {
        printError("userErr", "Please enter your email address!!");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("userErr", "Please enter a valid email address!!");
        } else{
            printError("userErr", "");
            userErr = false;
        }
    }
    if(inputPassword == "") {
        printError("passErr", "Please enter Password!!");
    }else{
        printError("passErr", "");
        passErr = false;
    }
    alert((userErr || passErr));
    if((userErr || passErr) == true) {
        return false;}

     else {
           alert("Login Succesfull");
        }
}

function validateForm() {

    // Retrieving the values of form elements 
    var name = document.singup.name.value;
    var email = document.singup.email.value;
    var mobile = document.singup.mobile.value;
    var inputPassword = document.singup.inputPassword.value;
    var confirmPassword = document.singup.confirmPassword.value;


	// Defining error variables with a default value
    var nameErr = emailErr = mobileErr =cpassErr= true;

    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name!!");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address!!");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address!!");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number!!");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number!!");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    if(inputPassword == "") {
        printError("passErr", "Please enter Password!!");
    }else{
    if(confirmPassword==inputPassword)
        {

            cpassErr= false;
        }
        else{
            printError("cpassErr","password Not matched");

        }
    }
    if(confirmPassword == "") {
        printError("cpassErr", "Please enter your Password Again!!");
    }

    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || mobileErr || cpassErr) == true) {
       return false;}
    // } else {
    //     // Creating a string from input data for preview
    //     var dataPreview = "You've entered the following details: \n" +
    //                       "Full Name: " + name + "\n" +
    //                       "Email Address: " + email + "\n" +
    //                       "Mobile Number: " + mobile + "\n" 
    //                 ;

    //     // Display input data in a dialog box before submitting the form
    //     alert(dataPreview);
    // }
};








// function printError(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }

// function validatelogin(){
//     var inputemail = document.loginform.inputEmail.value;
//     var inputPassword = document.loginform.inputPassword.value;
//     var userErr = passErr= true;
//     if(inputemail == "") {
//         printError("userErr", "Please enter your email address!!");

//     } else {
//         // Regular expression for basic email validation
//         var regex = /^\S+@\S+\.\S+$/;
//         if(regex.test(inputemail) === false) {
//             printError("userErr", "Please enter a valid email address!!");
//         } else{
//             printError("userErr", "");
//             userErr = false;
           
//         }
//     }
//     if(inputPassword == "") {
//         printError("passErr", "Please enter Password!!");
//     }else{
//         printError("passErr", "");
//         passErr = false;
//     }
//     //alert((userErr || passErr));
//     if((userErr || passErr) == true) {
//         return false;}
//     }
    

      
      









// function validateForm() {
   
//     // Retrieving the values of form elements 
//     var name = document.singup.name.value;
//     var email = document.singup.email.value;
//     var mobile = document.singup.mobile.value;
//     var inputPassword = document.singup.inputPassword.value;
//     var confirmPassword = document.singup.confirmPassword.value;

    
// 	// Defining error variables with a default value
//     var nameErr = emailErr = mobileErr =cpassErr= true;
    
//     // Validate name
//     if(name == "") {
//         printError("nameErr", "Please enter your name");
//     } else {
//         var regex = /^[a-zA-Z\s]+$/;                
//         if(regex.test(name) === false) {
//             printError("nameErr", "Please enter a valid name!!");
//         } else {
//             printError("nameErr", "");
//             nameErr = false;
//         }
//     }
    
//     // Validate email address
//     if(email == "") {
//         printError("emailErr", "Please enter your email address!!");
//     } else {
//         // Regular expression for basic email validation
//         var regex = /^\S+@\S+\.\S+$/;
//         if(regex.test(email) === false) {
//             printError("emailErr", "Please enter a valid email address!!");
//         } else{
//             printError("emailErr", "");
//             emailErr = false;
//         }
//     }
    
//     // Validate mobile number
//     if(mobile == "") {
//         printError("mobileErr", "Please enter your mobile number!!");
//     } else {
//         var regex = /^[1-9]\d{9}$/;
//         if(regex.test(mobile) === false) {
//             printError("mobileErr", "Please enter a valid 10 digit mobile number!!");
//         } else{
//             printError("mobileErr", "");
//             mobileErr = false;
//         }
//     }
//     if(inputPassword == "") {
//         printError("passErr", "Please enter Password!!");
//     }else{
//     if(confirmPassword==inputPassword)
//         {
            
//             cpassErr= false;
//         }
//         else{
//             printError("cpassErr","password Not matched");
           
//         }
//     }
//     if(confirmPassword == "") {
//         printError("cpassErr", "Please enter your Password Again!!");
//     }
    
//     // Prevent the form from being submitted if there are any errors
//     if((nameErr || emailErr || mobileErr || cpassErr) == true) {
//        return false;}
//     // } else {
//     //     // Creating a string from input data for preview
//     //     var dataPreview = "You've entered the following details: \n" +
//     //                       "Full Name: " + name + "\n" +
//     //                       "Email Address: " + email + "\n" +
//     //                       "Mobile Number: " + mobile + "\n" 
//     //                 ;
      
//     //     // Display input data in a dialog box before submitting the form
//     //     alert(dataPreview);
//     // }
// };
