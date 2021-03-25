<?php

$con=mysqli_connect("localhost","root","","exam");
mysqli_select_db($con,'user');

if(mysqli_connect_errno()){
    echo"Failed to connect".mysqli_connect_errno();
}

$query="SELECT `id`,`username`,`name`,`email` FROM `user`";
$result = mysqli_query($con,$query);

if ($result == null){
    echo "<script type='text/javascript'>alert('No Records!');</script>";
}


mysqli_close($con);

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Sign Up</title>

    <!-- Font Icon -->
    <link rel="stylesheet" href="fonts/material-icon/css/material-design-iconic-font.min.css">

    <!-- Main css -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>

    <div class="main">

        <section class="signup">
            <!-- <img src="images/signup-bg.jpg" alt=""> -->
            <div class="container">
                <div class="signup-content">
                    <form method="GET" id="signup-form" class="signup-form">
                        <table align="center">
                            <tr>
                                <th>ID</th>
                                <th>User Name</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                            <?php
                                while($rows=mysqli_fetch_assoc($result))
                                {
                            ?>
                            <tr>
                                <td style="text-align:center"><?php echo $rows['id']; ?></td>
                                <td style="text-align:center"><?php echo $rows['username']; ?></td>
                                <td style="text-align:center"><?php echo $rows['name']; ?></td>
                                <td style="text-align:center"><?php echo $rows['email']; ?></td>
                                
                            </tr>
                            <?php 
                                }
                            ?>
                        </table>
                    </form>                
                </div>
            </div>
        </section>

    </div>

    <!-- JS -->
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="js/main.js"></script>
</body><!-- This templates was made by Colorlib (https://colorlib.com) -->
</html>