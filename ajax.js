<!DOCTYPE html >
<html lang="en">
<head>
<meta charset="UTF-8">
<title> Javascript Ajax GET Demo </title>
<script>
function displayFullName()
{
//creating XMLHttpRequest object
var request= new XMLHttpRequest();
//giving the request object
request.open("GET","greet.php?fname=John&lname=Clark");
//explaining the event lister for ready state change event
request.onreadystatechange = function()
{
//check whether the request complete and was succesful
if (this.readyState ===4&& this.status ===200)
{
//entering the response from server into an html
document.getElementByID("result").innerHTML=this.responseText;
}
};
//sending the request to the server
request.send();
}
</script>
</head>
<body>
<div id="result">
<p> content of the result DIV box will be replaced by the server response </p>
</div>
<button type="button" onclick="displayFullName()"> Display Full Name </button>
</body>
</html>