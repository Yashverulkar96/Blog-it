const form=document.querySelector('form');

const createPost=async(e)=>{
e.preventDefault();

const doc={
    name:form.name.value,
    email:form.email.value,
    mobile:form.mobile.value,
    password:form.inputPassword.value,
    confirmPassword:form.confirmPassword.value
}

   await fetch('http://localhost:3030/users',{
       method:'POST',
       body:JSON.stringify(doc),
       headers:{'Content-Type':'application/json'}
   })

   window.location.replace('../html/HomeP.html');
}

form.addEventListener('submit',createPost)