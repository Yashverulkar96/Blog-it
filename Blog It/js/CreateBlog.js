const form=document.querySelector('form');


const createPost=async(e)=>{
    e.preventDefault();
var objEditor=CKEDITOR.instances["editors"];
/*alert(objEditor.getData());
alert(objEditor.document.getBody().getText());
*/  var timestamp=new Date();
    const doc={

        title:form.title.value,
        category:form.category.value,
        content:objEditor.document.getBody().getText(),
        timestamp:timestamp,
        likes:0,
        comment:'',
        
    }

    await fetch('http://localhost:3030/blogs',{
        method:'POST',
        body:JSON.stringify(doc),
        headers:{'Content-Type':'application/json'}
    })

    window.location.replace('../html/HomeP.html');


}

form.addEventListener('submit',createPost)


