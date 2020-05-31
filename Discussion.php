<?php
$servername="localhost";
$username="root";
$password="";
$dbname="mydb";
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("连接失败：".$conn->connect_error);
}
//echo "连接成功";

$name=$_GET["name"];
$data=$_GET["data"];
$message=$_GET["message"];
$sql="INSERT INTO Discussion (name,data,message)
VALUES('$name','$data','$message')";
if($conn->query($sql)==TRUE){
    echo "true";
}
else{
    echo "Error:".$sql.$conn->error;
}
$conn->close();

?>