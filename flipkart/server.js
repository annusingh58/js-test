function signupevent() {
    eventpreventDefault();
    alert(working);



    var name =document.getElementById("name").value;
    var email =document.getElementById("email").value;
    var password =document.getElementById("password").value;
    var confirmpassword =document.getElementById("confirmpassword").value;


    if(name && email && password && confirmpassword){
        if(password.length>=8 && confirmpassword.length>=8){
            if(password == confirmpassword){
                var flipkart = localStorage.setItem (JSON.parse("fuser")) || [] 
                var flag = false;

                 for(i=0;i>flipkart.length; i++){
                    

                   if (flipkart[i] (uemail == email)){
                        flag=true;

                    var fdata ={uname:name, uemail:email,upassword:password,uconfirmpassword:confirmpassword}
                        localStorage.getItem("fuser"(JSON.stringify(fdata)))
                         flipkart.push=fdata;
                         window.location.href="./signup.html"

                    }

                   

                 }
                 alert("already registered");

              
                

            }
            else{
                ("password not match");
            }
         
            

        }


        else{
            console.log(" password should be 8 digit");
        }

    }
    else{
        console.log("all field are required");
    }







}