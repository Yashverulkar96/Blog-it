window.onload=function(){
   let status=sessionStorage.getItem('user');
    if(status==null){
       // alert(status);
        const data=`<a href="login.html"><span class="glyphicon glyphicon-log-in"></span> Login</a>`
        document.getElementById('forLogin').innerHTML=data;
        document.getElementById('forLogout').innerHTML="";
        //const data1=`<a href="http://www.kuchewar.com/apjabdulkalam/drabjabdhulkalam.php" class="btn btn-dark" disabled>Read More</a>`
        //document.getElementById("card-btn").innerHTML=data1;
        //document.getElementsByClassName("card-btn").innerHTML=data1;
       // document.getElementsByName("card-img").innerHTML=data1;

       $(".card-btn").html('<a href="http://www.kuchewar.com/apjabdulkalam/drabjabdhulkalam.php" class="btn btn-dark" disabled>Read More</a>');
       $(".likes").html('<a id="likes" style="font-size:15px;color: black;" onclick="likeup()" disabled class="btn btn-dark"><i class="fa fa-thumbs-up"></i></a>');
        $("#logcreate").html('<a href="CreateBlog.html"style="text-align: center;margin-left: 45%;color: white;background-color: black;width: 150px;height: 40px;" class="btn btn-primary" disabled>Create Blog</a>');
    }else{
        //alert(status);

        const data=`<a href="logout.html"><span class="glyphicon glyphicon-log-in"></span> Logout</a>`
        document.getElementById('forLogin').innerHTML="";
        document.getElementById('forLogout').innerHTML=data;
        document.getElementById('forSignUp').innerHTML="";
        //const data1=`<a href="http://www.kuchewar.com/apjabdulkalam/drabjabdhulkalam.php" class="btn btn-dark">Read More</a>`
        //document.getElementById("card-btn").innerHTML=data1;
        //document.getElementsByClassName("card-btn").innerHTML=data1;
        $(".card-btn").html('<a href="http://www.kuchewar.com/apjabdulkalam/drabjabdhulkalam.php" class="btn btn-dark">Read More</a>');
        $(".likes").html('<a id="likes" style="font-size:15px;color: black;" onclick="likeup()" disabled class="btn btn-dark"><i class="fa fa-thumbs-up"></i></a>');
        $("#logcreate").html('<a href="CreateBlog.html"style="text-align: center;margin-left: 45%;color: white;background-color: black;width: 150px;height: 40px;" class="btn btn-primary">Create Blog</a>');
    }
}

function likeup(){
    alert('Inside like');
}

function logout(){
    sessionStorage.clear();
    alert("You are Logout Sucessfully!!");
   // sessionStorage.setItem('user',null);
  //  alert(sessionStorage.getItem('user'));
    window.location.replace('../html/HomeP.html');
}
