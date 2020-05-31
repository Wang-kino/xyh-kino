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
    }
    var number=0;
    var count=0;
    var array=[1,15,29,44,54,68,83,85,104,119,129,143,150,165,172,176,198,203,213,227,238,243];
    var music_=document.getElementById("song");
    var x;
function music(){
    if(music_.paused)
    {
    music_.play();
    x=setInterval(lyric_change2,1000);
    }
    else
    {
        clearInterval(x);
        music_.pause();
    }
};
function lyric_change2()
{
    count++;
    if(count==277)
    {
        count=0;
        clearInterval(x);
        number=0;
    }
    if(count==array[number])
    lyric_change();
};
//var array=[1,14,14,15,10,14,15,2,19,15,10,14,7,15,7,4,22,5,10,14,11,5,35];
function lyric_change(){
    var xhr=new XMLHttpRequest; 
    xhr.open("GET","Photo_lyric.php?number="+number,false);
    xhr.send();
    document.getElementById("lyric").innerHTML="<br><br>"+xhr.responseText;
    number=number+1;
    if(number==23)
    number=0;
}
function Dianzhan(){
    var xhr=new XMLHttpRequest;
    xhr.open("GET","Photo_DZ.php",false);
    xhr.send();
    document.getElementById("count").innerHTML="已被点赞："+xhr.responseText+"次！o(*////▽///ω＼*）";
    $(document).ready(function(){
    $(".like").attr("disabled","disabled");
    $(".like").css("background-color","pink");
    });

};
$(document).ready(function(){
    $("#1").click(function(){
        var num3=$("#1").val();
        num3=Number(num3);
        num3=num3*3;
        var num2=num3-1;
        var num1=num3-2;
        num1=String(num1);num2=String(num2);num3=String(num3);
        $("#A").attr("src","奇诺图片/"+num1+".jpg");
        $("#B").attr("src","奇诺图片//"+num2+".jpg");
        $("#C").attr("src","奇诺图片//"+num3+".jpg");
    });
    $("#2").click(function(){
        var num3=$("#2").val();
        num3=Number(num3);
        num3=num3*3;
        var num2=num3-1;
        var num1=num3-2;
        num1=String(num1);num2=String(num2);num3=String(num3);
        $("#A").attr("src","奇诺图片/"+num1+".jpg");
        $("#B").attr("src","奇诺图片//"+num2+".jpg");
        $("#C").attr("src","奇诺图片//"+num3+".jpg");
    });
    $("#3").click(function(){
        var num3=$("#3").val();
        num3=Number(num3);
        num3=num3*3;
        var num2=num3-1;
        var num1=num3-2;
        num1=String(num1);num2=String(num2);num3=String(num3);
        $("#A").attr("src","奇诺图片/"+num1+".jpg");
        $("#B").attr("src","奇诺图片//"+num2+".jpg");
        $("#C").attr("src","奇诺图片//"+num3+".jpg");
    });
    $("#right").click(function(){
        var num1=$("#1").val();
        var num2=$("#2").val();
        var num3=$("#3").val();
        num1=Number(num1);num2=Number(num2);num3=Number(num3);
        num1=num1+3;num2=num2+3;num3=num3+3;
        num1=String(num1);num2=String(num2);num3=String(num3);
        $("#1").html(num1);
        $("#2").html(num2);
        $("#3").html(num3);
        $("#1").attr("value",num1);
        $("#2").attr("value",num2);
        $("#3").attr("value",num3);

        num3=$("#1").val();
        num3=Number(num3);
        num3=num3*3;
        num2=num3-1;
        num1=num3-2;
        num1=String(num1);num2=String(num2);num3=String(num3);
        $("#A").attr("src","奇诺图片/"+num1+".jpg");
        $("#B").attr("src","奇诺图片//"+num2+".jpg");
        $("#C").attr("src","奇诺图片//"+num3+".jpg");
    });
    $("#left").click(function(){
        var num1=$("#1").val();
        var num2=$("#2").val();
        var num3=$("#3").val();
        num1=Number(num1);num2=Number(num2);num3=Number(num3);
        num1=num1-3;num2=num2-3;num3=num3-3;
        if(num1>0)
        {
        num1=String(num1);num2=String(num2);num3=String(num3);
        $("#1").html(num1);
        $("#2").html(num2);
        $("#3").html(num3);
        $("#1").attr("value",num1);
        $("#2").attr("value",num2);
        $("#3").attr("value",num3);
        
        num3=$("#3").val();
        num3=Number(num3);
        num3=num3*3;
        num2=num3-1;
        num1=num3-2;
        num1=String(num1);num2=String(num2);num3=String(num3);
        $("#A").attr("src","奇诺图片/"+num1+".jpg");
        $("#B").attr("src","奇诺图片//"+num2+".jpg");
        $("#C").attr("src","奇诺图片//"+num3+".jpg");
        }
        else
        alert("不能再退了！٩(//̀Д/́/)۶");
    });
});