function register(){
    var name=document.getElementById("name").value;
    var mima=document.getElementById("mima").value;
    var querenmima=document.getElementById("querenmima").value;
    var phone=document.getElementById("phone").value;
    var xhr=new XMLHttpRequest;
    if(name==""||mima=="")
    {
        alert("注册信息不全！(￣^￣) ");
    }
    else if((name=="xyh")||(name=="kino")||(name=="Kino"))
    {
        alert("取名错误！(￣^￣) ");
    }
    else if(!/^[0-9]+$/.test(mima))
    {
        alert("密码须全为数字(￣^￣)");
    }
    else if(mima.length<6)
    {
        alert("密码长度小于6位(￣^￣)");
    }
    else if(mima!=querenmima)
    {
        alert("密码与确认密码不符！(￣^￣) ");
    }
    else if(!/^[0-9]+$/.test(phone))
    {
        alert("电话号码输入错误！(￣^￣) ");
    }
    else
    {
        xhr.open("GET","Register.php?username="+name+"&mima="+mima+"&phone="+phone,false);
        xhr.send();
        if(xhr.responseText=="true")
        {
            alert("注册成功！(=￣ω￣=)");
            window.location.href="login.html";
        }
        else
        {
            alert("注册失败,原因未知( >﹏<。)");
        }
    }
}