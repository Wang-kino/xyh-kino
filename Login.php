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
$other=0;
$sql="SELECT name, password FROM User";
$result=$conn->query($sql);
if($result->num_rows>0){
    while($row=$result->fetch_assoc())
    {
        if($row["name"]==$name)
        {
            $other=1;
            if($row["password"]==$mima)
            {
                echo "true";
            }
            else{
                echo "false";
            }
        }
    }
    if($other==0)
    {
        echo "other";
    }
}
else{
    echo "other";
}
$conn->close();

?>