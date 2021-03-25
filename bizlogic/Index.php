<?php

$con=mysqli_connect("localhost","root","","exam");
mysqli_select_db($con,'user');

if(mysqli_connect_errno()){
    echo"Failed to connect".mysqli_connect_errno();
}


	$json = file_get_contents('php://input'); 	
	$obj = json_decode($json,true);

	$name = $obj['username'];
	
	$psw = $obj['password'];

     $sql="SELECT * FROM `user` WHERE `username`='$name'and `password` = '$psw'";
        
     try{
         $result=mysqli_query($con, $sql);
         
         if($result){
             if(mysqli_affected_rows($con)>0){
                 echo "<script type='text/javascript'>alert('Login Successful');</script>";
             }else{
                 echo"<script type='text/javascript'>alert('User name or password is incorrect');</script>";
                   // window.location.href='employeeViewAll.php';</script>";
             }
         }
     }catch(Exception $ex){
         echo("error in delete".$ex->getMessage());
     }

mysqli_close($con);

?>