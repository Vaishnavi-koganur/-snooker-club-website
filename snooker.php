<?php
$fname= $_POST['name'];
$lname= $_POST['lname'];
$email= $_POST['email'];
$Phoneno= $_POST['phone'];
$DOB= $_POST['dob'];
$Gender= $_POST['gender'];
?>
<h1>YOUR LOGIN IS SUCCESSFULL</h1>
<div>
<b>FIRST NAME:</b>
<?php
echo $fname."<br>";
?>
<b>LAST NAME:</b>
<?php
echo $lname."<br>";
?>
<b>EMAIL:</b>
<?php
echo $email."<br>";
?>
<b>PHONE NO:</b>
<?php
echo $Phoneno."<br>";
?>
<b>DOB:</b>
<?php
echo $DOB."<br>";
?>
<b>GENDER:</b>
<?php
echo $Gender."<br>";
?>
</div> 
<h2>THANK YOU!!</h2>