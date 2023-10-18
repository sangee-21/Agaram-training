let user_details = {}



function checkreg() {

    let name = $("#Uname").val()
    let email = $("#email").val()
    let password = $("#password").val()
    let aadharno = $("#aadharno").val()
    let address = $("#address").val()
    let phone = $("#phone").val()
    let city = $("#city").val()
    let area = $("#area").val()
    let pincode = $("#pincode").val()


    $.ajax({
        type: "post",
        url: "http://agaram.academy/api/action.php",
        data: {
            "request": "create_candidate",
            "name": name,
            "email": email,
            "password": password,
            "aadhar": aadharno,
            "address": address,
            "phone": phone,
            "city": city,
            "area": area,
            "pin": pincode,

        },
        success: function (response) {
            console.log("response", response)
            window.location="login1.html"

        },
        error: function (err) {
            console.log("error", err)
        }
    })



}
function logincheck() {
    let email1 = $("#log_email").val()
    let password1 = $("#log_password").val()
    $.ajax({
        type: "POST",
        url: "http://agaram.academy/api/action.php",
        data:{
        "request": "candidate_login",
        "email":email1,
        "password":password1
    },


        success: function (response) {
            console.log("response", response)
            window.location="home1.html"
           

        },
        error: function (err) {
            console.log("error", err)
        }
    
    })
}

function reg_list() {
    $.ajax({
        type: "GET",
        url: "http://agaram.academy/api/action.php",
        data:{
        "request": "getAllMembers",
        
    },


        success: function (response) {
            console.log("response", response)
            let pars=JSON.parse(response)
            // console.log(pars.data[89].id)
            let dat=""
            let da=pars.data
            for(i=0;i<da.length;i++){
                // console.log(response[i])
                dat=dat+`<tr>
                <td>${da[i].id}</td>
                <td>${da[i].name}</td>
                <td>${da[i].email}</td>
                <td>${da[i].aadhar}</td>
                <td>${da[i].address}</td>
                <td>${da[i].phone}</td>
                <td>${da[i].city}</td>
                <td>${da[i].area}</td>
                <td>${da[i].pin}</td>
                </tr>`
            }
            $("#mytable").html(dat)
           

        },
        error: function (err) {
            console.log("error", err)
        }
    
    })
}