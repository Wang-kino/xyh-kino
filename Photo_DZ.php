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

$sql="SELECT Count FROM Dianzhan";
$result=$conn->query($sql);
if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        //echo "Count:".$row["Count"];
        $change=$row["Count"];
    }
}
else{
    echo "无结果";
}

$change=$change+1;
mysqli_query($conn,"UPDATE Dianzhan SET Count=".$change." ");

echo $change;

$conn->close();
?>