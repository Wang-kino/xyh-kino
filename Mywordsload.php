<?php
$servername="localhost";
$username="root";
$password="";
$dbname="mydb";
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("连接失败：".$conn->connect_error);
}

$sql="SELECT name,data,message FROM Mywords";
$result=$conn->query($sql);
if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        echo '<div class="showdiscuss"><div><h3 class="time">'.$row["name"].'</h3>&nbsp&nbsp<p class="time">'.$row["data"].'</p></div><br><p class="pinlun">'.$row["message"].'</p></div>';
    }
}
else{
    echo "false";
}
$conn->close();
?>