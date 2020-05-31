<?php
$servername="localhost";
$username="root";
$password="";
$dbname="mydb";
$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){
    die("连接失败：".$conn->connect_error);
}

$name=$_GET["username"];
$mima=$_GET["mima"];
$phone=$_GET["phone"];
$sql="INSERT INTO User (name,password,phonenumber)
VALUES('$name','$mima','$phone')";
if($conn->query($sql)==TRUE){
    echo "true";
}
else{
    echo "Error:".$sql.$conn->error;
}
$conn->close();
?>