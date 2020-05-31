var name;
window.onload=function(){
    var x=document.cookie.indexOf("username=");
    var array=document.cookie.split('=');
    name=array[1];
        if(x!=-1)
        {
            var y=document.getElementById("logandreg");
            y.innerHTML=name;
            y.style.backgroundColor="yellow";
            y.setAttribute("disabled","disabled");
        }
    var xhr=new XMLHttpRequest;
    xhr.open("GET","Discussionload.php",false);
    xhr.send();
    $(document).ready(function(){
        var loads=xhr.responseText;
        if(loads=="false")
        {
            alert("评论列表加载失败！( >﹏<。)～");
        }
        else{
        $("#discussinfo").append(loads);
        }
    });
};
function senddiscussion(){
    var message=document.getElementById("my_words").value;
    if(message=="")
    {
        alert("没有检测到内容◔ ‸◔？")
    }
    else
    {
        var x=document.cookie.indexOf("username=");
        if(x==-1)
        {
        alert("请先登录！ (。-`ω´-)");
        }
        else
        {
        $(document).ready(function(){
                var mydate=new Date();
                mydate=mydate.toLocaleString();
                var info='<div class="showdiscuss"><div><h3 class="time">'+name+'</h3>&nbsp&nbsp<p class="time">'+mydate+'</p></div><br><p class="pinlun">'+message+'</p></div>'
                $("#discussinfo").append(info);
                var xhr=new XMLHttpRequest;
                xhr.open("GET","Discussion.php?name="+name+"&data="+mydate+"&message="+message,false);
                xhr.send();
                if(xhr.responseText!="true")
                {
                    alert("评论 记录失败( >﹏<。)～");
                    window.location.href="Discussion.html";
                }
                else{
                    alert("评论成功o(^▽^)o");
                    $("#discuss").attr("disabled","disabled");
                }
            });
        }
   }
}