var number=1;
        function changewords(){
            var word=document.getElementById("kino_words");
            word.innerHTML='“'+array[number]+'”';
            var a=number%3;
            if(a==0)
            word.style.color="white";
            else if(a==1)
            word.style.color="rgb(111,211,111)";
            else
            word.style.color="yellow";
            number=number+1;
            if(number==17)
            number=0;
        };
        setInterval(changewords,8000);
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
            xhr.open("GET","Mywordsload.php",false);
            xhr.send();
            $(document).ready(function(){
                var loads=xhr.responseText;
                if(loads=="false")
                {
                    alert("话语列表加载失败！( >﹏<。)～");
                }
                else{
                $("#wordsinfo").append(loads);
                }
            });
    };

    function sendwords(){
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
                        $("#wordsinfo").append(info);
                        var xhr=new XMLHttpRequest;
                        xhr.open("GET","Mywords.php?name="+name+"&data="+mydate+"&message="+message,false);
                        xhr.send();
                        if(xhr.responseText!="true")
                        {
                            alert("你的话语没有成功记录( >﹏<。)～");
                            window.location.href="Discussion.html";
                        }
                        else{
                            alert("你的话语已收到o(^▽^)o");
                            $("#words").attr("disabled","disabled");
                        }
                    });
                }
           }
        }