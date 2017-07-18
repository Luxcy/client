    $("#signup-btn").click(function(){
        var email = $.trim($("#email").val());
        var password = $.trim($("#password").val());
         if(email == ""){
             alert("请输入用户名");
             return false;
         }else if(password == ""){
             alert("请输入密码");
             return false;
         }
         //ajax去服务器端校验
         var data= {email:email,password:password};
         $.ajax({
             type:"POST",
             url:"http://192.168.95.11:5000/login",
             data:{"email":email,"password":password},
             dataType:'json',
             success:function(data2){
                 //var token=data2.token;
                 var token=btoa(data2.token+":");
                 sessionStorage.setItem("token","Basic "+token);
                 //sessionStorage.setItem("token",token);
                 document.getElementById('logout_btn_top').style.display='block';
                 document.getElementById('signup_btn_top').style.display='none';
                 document.getElementById('signin_btn_top').style.display='none';
                 document.getElementById("signin-up").style.display="none";
             },
             error: function(jqXHR){
             alert("发生了错误xxx：" + jqXHR.status);  
            },   
         });
 }); 