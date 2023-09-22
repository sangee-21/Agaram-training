// click login-goto login page
function logincheck() {
   
    let login_Username = document.getElementById("name").value;
    let login_Password = document.getElementById("password").value;
    let log = JSON.parse(localStorage.getItem("userdetails"))
    for (var i = 0; i < log.length; i++) {
        // console.log(log[i])
        if (login_Username == log[i].email && login_Password == log[i].orpassword) {
            alert("welcome facebook")
            window.location="home.html"
            localStorage.setItem("loggedin", true)
            localStorage.setItem("username", log[i].orname)
            document.getElementById("para").innerHTML = `<span> welcome ${log[i].orname}</span>`
            rl()
        }   
    }
}
// click logout shows login page
function logoutcheck() {
    localStorage.removeItem("loggedin")
    window.location="login.html"

}
// if refresh- username should be show
function checklogin() {
    if (localStorage.getItem("loggedin")) {
        let a = localStorage.getItem("username")
        document.getElementById("para").innerHTML = `<span>Welcome ${a}</span>`
        rl()
    }
}
// click register button - open register page
function register() {
    window.location="register.html"
}
// add newuser detail in localStorage 
function checkreg() {
    
    let reg_user = document.getElementById("orname").value
    let reg_email = document.getElementById("email").value
    let reg_password = document.getElementById("orpassword").value
    let parsedata = []
    if (localStorage.getItem("userdetails")) {
        parsedata = JSON.parse(localStorage.getItem("userdetails"))
    }
    parsedata.push({
        orname: reg_user,
        email: reg_email,
        orpassword: reg_password,
    })
    localStorage.setItem("userdetails", JSON.stringify(parsedata))
}
// (add new user detail in table)(dynamic)

function rl() {
    let b = JSON.parse(localStorage.getItem("userdetails"))
    localStorage.setItem("userdetails",JSON.stringify(b))
    let htmldata = ""
    for (let i = 0; i < b.length; i++)
        htmldata = htmldata + `<tr>
                            <td>${b[i].orname}</td>
                            <td>${b[i].email}</td>
                            <td><button id="pencil" onclick="p_icon('${b[i].email}')">&#9998</button></td>
                            <td><button id="dustpin" onclick="d_icon('${b[i].email}')">&#128465</button></td>
                        </tr>`
    document.getElementById("mytable").innerHTML = htmldata
}
// click delete icon-delete in table and localStorage

function d_icon(g) {
    let d = JSON.parse(localStorage.getItem("userdetails"))
    let new_data = []

    for (let i = 0; i < d.length; i++) {
        if (d[i].email != g) {
            new_data.push(d[i])
        }
    }
    localStorage.setItem("userdetails", JSON.stringify(new_data))
    rl()
}
// click pencil icon-edit user details in table and localStorage

function p_icon(z) {
    
    let m = JSON.parse(localStorage.getItem("userdetails"))
    for (i = 0; i < m.length; i++) {
        if (m[i].email == z) {
            let a1 = m[i].email
            let a2 = m[i].orname
            let a3 = m[i].orpassword

            let getemail = prompt("enter your email", a1.innerHTML)
            let getname = prompt("enter your name", a2.innerHTML)
            let getpassword = prompt("enter your password", a3.innerHTML) 
            let edit_list = []
            if (localStorage.getItem("userdetails")) {
                edit_list = JSON.parse(localStorage.getItem("userdetails"))
            }
            edit_list.push({
                email: getemail,
                orname: getname,
                orpassword: getpassword
            })
            localStorage.setItem("userdetails", JSON.stringify(edit_list));
            d_icon(z)
        }
    }
}
function secure(){
    if(!localStorage.getItem("loggedin")){
        window.location="frontpage.html"
    }

}

