0000000var user = []; 
var currentUser;


function signUp() {
    var checkDuplicateUser = false;
    var username = document.getElementById('username').value;
    var name = username.length
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    // var alert = document.getElementById('alert');
    var newId = 1000;
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');
    var div3 = document.getElementById('div3');
    // document.getElementById('signUpform').addEventListener("click" ,(value)=>{
        //     value.preventDefault()
        // })
        if (name > 12) {
            // alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
            // alert.innerHTML="Username Must contain 12 character"
            swal(
                'Check username',
                'username must contain 12 character ',
                'error'
                )
            }
            else if (password.length < 8) {
                // alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
                // alert.innerHTML="Password Must contain 8 character"
                swal(
                    'Check pasword',
                    'password must contain 8 character',
                    'error'
                    )
                    
                }
            else if (!username && !email && !password) {
                // alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
                // alert.innerHTML="Fill these field"
                swal(
                    'Fill thses fields',
                    'username must contain 12 character & password must contain 8 character',
                    'error'
                    )
                    
                }
                
                else if (!username) {
                    
                    div1.setAttribute("class", "fa-solid fa-circle-exclamation text-danger", "role", "alert")
                    
                    
                } else if (!email) {
                    div2.setAttribute("class", "fa-solid fa-circle-exclamation text-danger", "role", "alert")
                    
                }
                else if (!password) {
                    div3.setAttribute("class", "fa-solid fa-circle-exclamation text-danger", "role", "alert")
        
                }
    else if (name > 12 && password.length < 8) {
        // alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
        // alert.innerHTML="username 12 character, password 8"
        swal(
            'Check pasword',
            'username must contain 12 character & password must contain 8 character',
            'error'
            )
            
            
        }
        else if (!email.includes("@")) {
            // alert.setAttribute("class" , "alert alert-danger" , "role", "alert")
            // alert.innerHTML="Enter valid email"
            swal(
                'Wrong email',
                'Check the email & put correct',
                'error'
                )
                
            }
            else {
                
                var localStorageValues = JSON.parse(localStorage.getItem("users"));
               
                     
                
                if (localStorageValues == null) {
                    user.push({
                        userId : newId,  
                        username,
                        email,
                        password,
                    })
                    currentUser = {
                userId : newId,  
                username,
                email,
                password,
            }
            setTimeout(() => {
                window.location.href = "./dashboard.html";
            }, 1000)
            
            swal(
                'Good job!',
                'Successfully Signup ',
                'success'
                )
            localStorage.setItem("users", JSON.stringify(user));
            localStorage.setItem("CurrentUsers", JSON.stringify(currentUser));
            console.log(newId)
            console.log(currentUser)
        }
        else {
            localStorageValues.forEach(function(element){
                if (element.email == email) {
                    checkDuplicateUser = true;
                    
                }
            });
            if (checkDuplicateUser == false){
                var arrayLength = localStorageValues.length- 1;
                newId = localStorageValues[arrayLength].userId +1 ;
                localStorageValues.push({
                    userId :newId,
                    username,
                    password,
                    email
                })
                currentUser = {
                    userId : newId,  
                    username,
                    email,
                    password,
                }
                
                localStorage.setItem("users", JSON.stringify(localStorageValues));
                localStorage.setItem("CurrentUsers", JSON.stringify(currentUser));
                // document.getElementById('login').style.display = "block";
                // document.getElementById('signup').style.display = "none";
                
            }
            
            if(checkDuplicateUser==true){
                console.log("exist")
                swal(
                    'Please Login your account',
                    'User Already Exist',
                    'error'
                    )
                }
                else {
                setTimeout(() => {
                    window.location.href = "./dashboard.html";
                }, 1000)
                
                swal(
                    'Good job!',
                    'Successfully Signup ',
                    'success'
                    )

            }
            
            
        }
        
        // var Allusers=[];
        
        // var foruser = JSON.parse(localStorage.getItem("users"))
        // foruser.forEach((value)=>{
            //     currentUserId=value.userId
            // })
            // Allusers.push({
                //     currentUserId 
                // })
                // localStorage.setItem("currentUser" ,JSON.stringify(Allusers))
                
                
                document.getElementById('username').value = "";
                document.getElementById('email').value = "";
                document.getElementById('password').value = "";
                
                
                
            }
            
        }
        function ab() {
            document.getElementById('login').style.display = "block";
            document.getElementById('signup').style.display = "none";
            
        }
        function cd() {
            document.getElementById('login').style.display = "none";
    document.getElementById('signup').style.display = "block";

}

function login() {
    document.getElementById('btn2').addEventListener("click" , function (event){
        event.preventDefault()
    })
    var loginemail = document.getElementById('loginemail').value;
    var loginpassword = document.getElementById('loginpassword').value;
    var alert = document.getElementById('alert2');
    var local = localStorage.getItem("users");
    var currentUser = localStorage.getItem("currentUser");
    var currentUserId;
    // console.log(local)
   
    var check = false;
    if (local === null) {
        // alert.setAttribute("class", "alert alert-danger", "role", "alert");
        // alert.innerHTML = "user does not exist";
        swal(
            'user does not exist',
            'Check the email & put correct',
            'error'
        )
        
    }
    else {
        local = JSON.parse(local)
    }

    local.forEach((e) => {
        if (e.email.includes(loginemail) && e.password.includes(loginpassword)) {
            check = true;
            var currentUser = {
                userId : e.userId,  
                username : e.username,
                email :e.email,
                password :e.password
            }
            console.log(currentUser)
            localStorage.setItem("CurrentUsers" , JSON.stringify(currentUser))
        }
    })
    if (check == true) {
        //   alert.setAttribute("class" , "alert alert-success" , "role", "alert")
        //   alert.innerHTML="Successfully login"
        // alert.setAttribute("class" , "alert alert-success" , "role", "alert");
        // alert.innerHTML="Successfully login";
        swal(
            'Good job!',
            'Successfully login ',
            'success'
        )
        setTimeout(() => {
            window.location.href = "./dashboard.html";
        }, 1000)
        document.getElementById('loginemail').value = "";
        document.getElementById('loginpassword').value = "";

    } else if (check == false) {
        swal(
            'Wrong email or password',
            'Check the email & put correct',
            'error'
        )
    }
    

}

// var loginBtn = document.getElementById("btn2");
// loginBtn.addEventListener("click", (e) => {
//     e.preventDefault();
// }
// )



var signUpBtn = document.getElementById('signUpBtn');
signUpBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
});

// localStorage.clear()