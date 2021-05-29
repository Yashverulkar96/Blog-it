const container=document.querySelector('.row');

const renderPosts=async()=>{
    let uri='http://localhost:3030/blogs';

    const res=await fetch(uri);
    const posts=await res.json();
    console.log(posts);

       let template='';
       posts.forEach(post=>{
           template+=`
           <div class="col-xs-8 col-sm-5 col-md-4 col-lg-3 mx-auto">
           <div class="card" style="max-height:700px; margin-bottom:30px;">
                <img src="../pictures/pic.jpg" class="card-img-top" alt="card image">
                <div class="card-body">
                  <h3><Strong>${post.title}</Strong></h3>
                  <h5><Strong>${post.category}</Strong></h5>
                  <p class="card-text" style="font-size:14;">${post.content.slice(0, 200)}</p>
                  <a href="ViewBlog.html?id=${post.id}">Read More...</a>
                </div>
                <a class="like-counter" style="font-size:15px;color:black;" disabled
                 class="btn btn-dark"><i class="fa fa-thumbs-up"></i>
                 <span class="Click-text">${post.likes}<a id="clicks"></span></a>
              
                 </div>
                 </div>
              </div>
           `
       })

       container.innerHTML=template;
}
window.addEventListener('DOMContentLoaded',()=>renderPosts())