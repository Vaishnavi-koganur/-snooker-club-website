function opa()
    {
        document.getElementById("ho").style.opacity="0.5";
    }
        function nrmlImg()
    {
        document.getElementById("ho").style.opacity="1.0";
    }

    function opa1()
    {
        document.getElementById("ho1").style.opacity="0.5";
    }
    
    
    function nrmlImg1()
    {
        document.getElementById("ho1").style.opacity="1.0";
    }

    function opa2()
    {
        document.getElementById("ho2").style.opacity="0.5";
    }
    
    
    function nrmlImg2()
    {
        document.getElementById("ho2").style.opacity="1.0";
    }
    
           function toReadMore(){
    document.getElementById("hide").style.display="none";
    
    document.getElementById("readmore").innerHTML="<strong>What is the concept of snooker? </strong><br><br>A game played on a billiard table with 15 red balls, six balls of other colours, and a white cue ball. The object is to pot the balls in a certain order. a shot in which the cue ball is left in a position such that another ball blocks the object ball<br><br><strong>What are the facts about snooker?</strong><br><br>The game originally included 15 reds, yellow, green, pink and black. Brown and blue were only added later. The word 'snooker', a slang military term referring to someone who is inexperienced, became tied to the game after Chamberlain called an opponent a 'snooker' after he missed a pot<br><br><strong>How many balls are in snooker?</strong><br><br>Snooker is played on an English billiards table using 15 red, 6 coloured and one white cue ball. Points are scored by pocketing balls and forcing an opponent to give away points through 'snookers'. It may be played by two persons, pairs or a team.<br><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button ondblclick='dblFunc()'>double click to read less</button>";
    

     document.getElementById("readless").innerText="double click to read less";
}


function dblFunc(){
    document.getElementById("readmore").style.display="none";
   
}

 function clr(elmnt,clr){
    elmnt.style.color=clr;
    }

    function fapr(){
    // document.getElementById("hide").style.display="none";
    
    document.getElementById("falilities").innerHTML="<strong>What is the concept of snooker? </strong><br><br>"
    }

    function fun_sub(){
                    alert("The form has been submitted successfully");
                }
                function fun_res(){
                    alert("The form has been reset");
                }
                function fun_foc(){
                    document.getElementById("name").style.backgroundColor="yellow";
                }
                function fun_blur(){
                    document.getElementById("lname").style.backgroundColor="red";  
                }
                function fun_ch(){
                 document.getElementById("demo").innerHTML="Date value is changed";
                }
                function fun_sel(){
                    alert("Following text has been selected");
                }
        
        
                function validateform(){
                        var name = document.myform.name.value;
                        var password = document.myform.password.value;
                        var cpassword = document.myform.cpassword.value;
                        var phone=document.myform.phone.value;
                    if(name == null || name == "")
                    {
                        alert("Name can't be blank");
                        return false;
                    }
                    else if(password == cpassword)
                    {
                        return true;
                    }
                    else{
                        alert("Passwords must be same");
                        return false;
                    }
                    if(password.length!=6){
                        alert("Password must contain 6 characters");
                        return false;
                    }
                    if(phone.length!=10){
                        alert("Phone number should contain 10 digits");
                        return false;
                    }
        
                    }

    
