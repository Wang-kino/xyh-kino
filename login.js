function login(){
    var username=document.getElementById("name").value;
    var usermima=document.getElementById("mima").value;
    var xhr=new XMLHttpRequest;
    if(username=="")
    {
        alert("昵称错误！(￣^￣)");
    }
    else if(username!="用户名")
    {
        xhr.open("GET","Login.php?username="+username+"&mima="+usermima,false);
        xhr.send();
        if(xhr.responseText=="true")
        {
            alert("登录成功！(●’◡’●)");
            document.cookie="username="+username;
            window.location.href="index.html";
        }
        if(xhr.responseText=="false")
        {
            alert("用户名与密码不匹配！(￣^￣) ");
        }
        if(xhr.responseText=="other")
        {
            alert("没有此用户，请进行注册！(￣^￣) ");
        }
    }
    else
    {
        alert("昵称错误!(￣^￣) ");
    }
}