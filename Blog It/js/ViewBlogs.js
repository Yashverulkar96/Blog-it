
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.contentdata');


const renderPosts = async () => {
  let uri = 'http://localhost:3030/blogs/' +id;

  const res = await fetch(uri);
  const post = await res.json();

  console.log(post);

  
    template = `
        <div class="post">
         <h2>${post.title}</h2>
         <h5><b>Category :${post.category}</b></h5>
         <p>Timestamp :${post.timestamp}</p>
         <img src="../../html/pic4.jpg" alt="viewblog image" height="200" width="250" align="right" style="padding-left:25px";>
         <p id="contentid">${post.content}</p>
         
         <p>${post.likes} Likes</p>
        
         
         
         <p>${post.Comment}</p>
         
         
         </div>
         `
    /* <a href ="/details.html?id=${post.id}">read more...</a>
    post.Comment.forEach(com=>{})
    */


  container.innerHTML = template;

}

window.addEventListener('DOMContentLoaded', () => renderPosts());

/*function counter( async () =>{
  let uri='http://localhost:3030/blogs/' +id;

  renderPosts();
 
  var current= `${count.likes}`;
  alert(current);
});*/