
var items = document.querySelectorAll("#dropdown li ");
var cat;

//  document.querySelector("dropdown").addEventListener("click", renderPosts);
const container = document.querySelector('.row');
const comment = document.querySelector('.comment');
const category = document.querySelector('#myNavbar');
for (var i = 0; i < items.length; i++) {
    items[i].onclick = function () {
        //    alert((this).getAttribute('value'));
        cat = (this).getAttribute('value');
        // alert("cat"+cat);
        renderPosts(cat);
    }
}
const renderPosts = async (cat) => {

    let uri = 'http://localhost:3030/blogs';
    //  alert("called"+cat);
    const res = await fetch(uri);
    const posts = await res.json();
    // alert("category :"+cat);
    console.log(posts);

    let template = '';
    template += `
    <h3 class="mb-5" style="text-align:center; padding:20px"><strong>${cat} Blogs</strong></h3>`;
    if (cat == "All") {
        posts.forEach(post => {

            template += 
        `<div class="col-xs-8 col-sm-5 col-md-4 col-lg-3" style="margin-left:35px">
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
        
        
            /*`
        <div id="cards  mb-3">
 <!--   <h3 class="mb-5" style="text-align: center;"><strong>${cat} Blogs</strong></h3>-->
   <!-- <div class="row" style="margin-left: 60px; margin-top: 5px;">
        <div class="col-sm-3" style="margin-top: 5px;">
            <div class="card" style="width: 25rem;">
                <img src="../pictures/pic.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title"><strong>${post.title}</strong></h5>
                    <p class="card-text">${post.content}</p>
                    <a class="btn btn-dark" href="ViewBlog.html?id=${post.id}">Read More...</a>
                    
                </div>
            </div>
        </div>
    </div>-->
</div>
    
         `*/
        })
        container.innerHTML = template;
    }
    else {

    /* template += `<h3 class="mb-5" style="text-align: center;"><strong>${cat} Blogs</strong></h3>`;*/
        posts.forEach(post => {
            if ((post.category) == cat) {
                template += `
                    <div id="cards">
                    <div class="row" style="margin-left: 60px; margin-top: 5px;">
                    <div class="col-sm-3" style="margin-top: 5px;">
                        <div class="card" style="width: 25rem;">
                            <img src="../pictures/pic.jpg" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"><strong>${post.title}</strong></h5>
                                <p class="card-text">${post.content}</p>
                                <div class="card-btn"><a href="ViewBlog.html" class="btn btn-dark">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
                    `  }
        })

        container.innerHTML = template;
    }
}

window.onload(renderPosts("All"));

//     posts.forEach(post => {
//         if((post.Category)== cat){
//         template += `
//         <div id="cards">
//     <h3 class="mb-5" style="text-align: center;"><strong>Latest Blogs </strong></h3>
//     <div class="row" style="margin-left: 60px; margin-top: 5px;">
//         <div class="col-sm-3" style="margin-top: 5px;">
//             <div class="card" style="width: 25rem;">
//                 <img src="pic.jpg" class="card-img-top" alt="..." />
//                 <div class="card-body">
//                     <h5 class="card-title"><strong>${post.title}</strong></h5>
//                     <p class="card-text">${post.Content}</p>
//                     <div class="card-btn"><a href="ViewBlog.html" class="btn btn-dark">Read More</a></div>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>

//          `  }   
/* <a href ="/details.html?id=${post.id}">read more...</a>*/
  //  })


    //  container.innerHTML = template;

// }



//  window.addEventListener("click",renderPosts);
