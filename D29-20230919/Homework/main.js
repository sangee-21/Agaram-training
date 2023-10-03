const firebaseConfig = {
    apiKey: "AIzaSyDOEUhaNRwJSnvlTtqfk_xX7nh6iemUCQI",
    authDomain: "my-webapp-5cc13.firebaseapp.com",
    databaseURL: "https://my-webapp-5cc13-default-rtdb.firebaseio.com",
    projectId: "my-webapp-5cc13",
    storageBucket: "my-webapp-5cc13.appspot.com",
    messagingSenderId: "924113768883",
    appId: "1:924113768883:web:69e297e6b3ea660447fbc6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// get ref to database services

var db = firebase.database();

var dataRef = db.ref("registeredUsers");

var auth = firebase.auth();

console.log(auth)
// click login-goto login page
// function logincheck() {

//     let login_Username = document.getElementById("name").value;
//     let login_Password = document.getElementById("password").value;
//     let log = JSON.parse(localStorage.getItem("userdetails"))
//     for (var i = 0; i < log.length; i++) {
//         // console.log(log[i])
//         if (login_Username == log[i].email && login_Password == log[i].orpassword) {
//             alert("welcome facebook")
//             window.location="home.html"
//             localStorage.setItem("loggedin", true)
//             localStorage.setItem("username", log[i].orname)
//             document.getElementById("para").innerHTML = `<span> welcome ${log[i].orname}</span>`
//             rl()
//         }   
//     }
// }
// click logout shows login page
function logoutcheck() {
    localStorage.removeItem("loggedin")
    window.location = "login.html"

}
// if refresh- username should be show
function checklogin() {
    if (localStorage.getItem("loggedin")) {
        let a = localStorage.getItem("logname")
        document.getElementById("para").innerHTML = `<span>Welcome ${a}</span>`
        rl()
    }
}
// click register button - open register page
function register() {
    window.location = "register.html"
}
// add newuser detail in localStorage 
function checkreg() {
    let reg_name = document.getElementById("orname").value
    let reg_email = document.getElementById("email").value
    let reg_password = document.getElementById("orpassword").value

    auth.createUserWithEmailAndPassword(reg_email, reg_password)
        .then((userCredential) => {
            alert("register sucessfully")
            console.log(userCredential)
        })
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        });
    // console.log('register function called');
    // let reg_name = document.getElementById("orname").value
    // let reg_email = document.getElementById("email").value
    // let reg_password = document.getElementById("orpassword").value

    // let reg_data = {
    //     name: reg_name,
    //     email: reg_email,
    //     password: reg_password,
    // }

    // dataRef.once('value')
    //     .then(function (snapshot) {
    //         let data = snapshot.val();
    //         console.log(data);
    //         if (data) {
    //             data.push(reg_data);
    //             db.ref(`registeredUsers`).set(data);
    //         }
    //         else {
    //             db.ref(`registeredUsers/${0}`).set(reg_data);
    //         }
    //     })
}

function logincheck() {

    let user_detail = document.getElementById("name").value
    let password = document.getElementById("password").value

    auth.signInWithEmailAndPassword(user_detail, password)
    .then((userCredential) => {
        alert("login sucessfully")
        window.location = "home.html";
        console.log(userCredential)

  })
  .catch((error) => {
        console.log(error.code)
        console.log(error.message)
  });
    // dataRef.once('value')
    //     .then(function (snapshot) {
    //         let data = snapshot.val();
    //         console.log(data);
    //         if (data) {
    //             for (i = 0; i < data.length; i++) {

    //                 if ((data[i].name == user_detail) && (data[i].password == password)) {
    //                     alert("login successfully")
    //                     localStorage.setItem("loggedin", true)
    //                     localStorage.setItem("logname", data[i].name)
    //                     window.location = "home.html";
    //                     break;
    //                 }
    //                 // else{
    //                 //     alert("Please Register First");                
    //                 // }
    //             }
    //         }
    //     })
}
// let reg_user = document.getElementById("orname").value
// let reg_email = document.getElementById("email").value
// let reg_password = document.getElementById("orpassword").value
// let parsedata = []
// if (localStorage.getItem("userdetails")) {
//     parsedata = JSON.parse(localStorage.getItem("userdetails"))
// }
// parsedata.push({
//     orname: reg_user,
//     email: reg_email,
//     orpassword: reg_password,
// })
// localStorage.setItem("userdetails", JSON.stringify(parsedata))
// }
// (add new user detail in table)(dynamic)

function rl() {
    // let b = JSON.parse(localStorage.getItem("userdetails"))
    // localStorage.setItem("userdetails",JSON.stringify(b))
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            htmldata = ""
            if (data) {
                for (i = 0; i < data.length; i++) {

                    htmldata = htmldata + `<tr>
                            <td>${data[i].name}</td>
                            <td>${data[i].email}</td>
                            <td><button id="pencil" onclick="p_icon('${data[i].email}')">&#9998</button></td>
                            <td><button id="dustpin" onclick="d_icon('${data[i].email}')">&#128465</button></td>
                        </tr>`
                    document.getElementById("mytable").innerHTML = htmldata
                }
            }
        })
}
// click delete icon-delete in table and localStorage

function d_icon(g) {
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            let new_data = []
            for (let i = 0; i < data.length; i++) {
                if (data[i].email != g) {
                    new_data.push(data[i])
                }
            }
            db.ref("registeredUsers").set(new_data)
            rl()
        })


}
// click pencil icon-edit user details in table and localStorage

function p_icon(z) {
    dataRef.once('value')
        .then(function (snapshot) {
            let data = snapshot.val();
            console.log(data);
            for (i = 0; i < data.length; i++) {
                if (data[i].email == z) {
                    let a1 = data[i].email
                    let a2 = data[i].name
                    let a3 = data[i].password

                    let getemail = prompt("enter your email", a1.innerHTML)
                    let getname = prompt("enter your name", a2.innerHTML)
                    let getpassword = prompt("enter your password", a3.innerHTML)
                    let edit_list = []
                    if (data) {
                        edit_list = data
                    }
                    edit_list.push({
                        email: getemail,
                        name: getname,
                        password: getpassword
                    })
                    db.ref("registeredUsers").set(edit_list);
                    d_icon(z)
                }
            }



        })
    // let m = JSON.parse(localStorage.getItem("userdetails"))
    // for (i = 0; i < m.length; i++) {
    //     if (m[i].email == z) {
    //         let a1 = m[i].email
    //         let a2 = m[i].orname
    //         let a3 = m[i].orpassword

    //         let getemail = prompt("enter your email", a1.innerHTML)
    //         let getname = prompt("enter your name", a2.innerHTML)
    //         let getpassword = prompt("enter your password", a3.innerHTML)
    //         let edit_list = []
    //         if (localStorage.getItem("userdetails")) {
    //             edit_list = JSON.parse(localStorage.getItem("userdetails"))
    //         }
    //         edit_list.push({
    //             email: getemail,
    //             orname: getname,
    //             orpassword: getpassword
    //         })
    //         localStorage.setItem("userdetails", JSON.stringify(edit_list));
    //         d_icon(z)
    //     }
    // }
}
// function secure() {
//     if (!localStorage.getItem("loggedin")) {
//         window.location = "frontpage.html"
//     }

// }

